terraform {
  required_providers {
    render = {
      source = "render-oss/render"
    }
  }
}

provider "render" {}

resource "render_web_service" "api" {
  name   = "mi-api-terraform"
  plan   = "free"
  region = "oregon"

  runtime_source = {
    native_runtime = {
      runtime       = "node"
      repo_url      = "https://github.com/gusgarozzo/mi-api-terraform"
      branch        = "main"
      build_command = "npm install"
      auto_deploy   = true
    }
  }

  start_command = "npm start"
}