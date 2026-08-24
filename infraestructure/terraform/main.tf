terraform {
  required_providers {
    render = {
      source  = "render-oss/render"
    }
  }
}

provider "render" {}

resource "render_web_service" "api" {
  name = "mi-api-terraform"

  plan = "free"

  runtime = "node"

  repo_url = "https://github.com/gusgarozzo/mi-api-terraform"

  build_command = "npm install && npm run build"

  start_command = "npm start"

  branch = "main"
}

