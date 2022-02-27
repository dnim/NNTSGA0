terraform {
  required_providers {
    docker = {
      source = "kreuzwerker/docker"
      version = "2.13.0"
    }
  }
}

provider "docker" {
  
}

resource "docker_image" "centos" {
  name = "centos:latest"
}

resource "docker_container" "centos" {
  image = docker_image.centos.latest
  name = "centos-container"
}
