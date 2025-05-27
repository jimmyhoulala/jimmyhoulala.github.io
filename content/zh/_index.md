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
sections:
  - block: collection
    id: activities
    content:
      title: Recent Posts
      subtitle: ''
      text: 'Check out my recent blog posts below!'
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        # The folders to display content from
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        publication_type: ""
        featured_only: false
        exclude_featured: false
        exclude_future: false
        exclude_past: false
      # Choose how many pages you would like to offset by
      # Useful if you wish to show the first item in the Featured widget
      offset: 0
      # Field to sort by, such as Date or Title
      sort_by: 'Date'
      sort_ascending: false
    design:
      # Choose a listing view
      view: card
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
