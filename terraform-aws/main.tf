terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

resource "aws_iam_policy" "policy_one" {
  name = "policy-618033"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action   = ["ec2:Describe*"]
        Effect   = "Allow"
        Resource = "*"
      },
    ]
  })
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_ecr_repository" "pfa_repo" {
  name = "fpa_ecr_repository"
}

resource "aws_ecs_cluster" "pfa_cluster" {
  name = "fpa_ecs_cluster"
}

resource "aws_ecs_task_definition" "prepare_containter_service" {
  family = "pfa-tasks"
  container_definitions = jsonencode([
    {
      name      = "preapare-container"
      image     = aws_ecr_repository.pfa_repo.repository_url
      cpu       = 10
      memory    = 512
      essential = true
      portMappings = [
        {
          containerPort = 3000
          hostPort      = 3000
        }
      ]
    }
  ])
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  memory                   = 512
  cpu                      = 10
  # execution_role_arn       = aws_iam_policy.policy_one.arn
}

resource "aws_iam_role" "ecsTaskExecutionRole" {
  name               = "ecsTaskExecutionRole"
  assume_role_policy = data.aws_iam_policy_document.assume_role_policy.json
  managed_policy_arns = [aws_iam_policy.policy_one.arn]
}

data "aws_iam_policy_document" "assume_role_policy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["esc-tasks.amazonaws.com"]
    }
  }

}