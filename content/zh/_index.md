---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "3rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: '下载简历'
        url: https://jimmyhoulala.github.io/uploads/resume_chinese.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: endless-constellation.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: resume-experience
    title: '教育 & 实习经历'
    id: experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: True
  - block: collection
    id: activities
    content:
      title: 活动
      filters:
        folders:
          - activities
        featured_only: true
    design:
      view: article-grid
      columns: 2
  - block: collection
    id: projects
    content:
      title: '项目经历'
      text: ''
      filters:
        folders:
          - project
    design:
      view: article-grid
      fill_image: false
      columns: 2
  - block: resume-skills
    id: s_h
    content:
      title: 技能 & 业余爱好
      username: admin
    design:
      show_skill_percentage: false
  - block: resume-awards
    id: awards
    content:
      title: 获奖经历
      username: admin
  - block: resume-languages
    content:
      title: 语言水平
      username: admin
---
