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
        text: Download CV
        url: https://jimmyhoulala.github.io/uploads/resume_english.pdf
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

  - block: collection
    id: activities
    content:
      title: Recent Activities
      text: '{{< carousel-en >}}'
      filters:
        folders: 
          - activities

  - block: resume-experience
    id: experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: True


  - block: resume-experience
    content:
      title: "Experience"
      items:
        - title: "Senior Developer"
          company: "Tech Company"
          location: "San Francisco, CA"
          date_start: "2020-01-01"
          date_end: ""
          description: |
            * Led development of key features
            * Mentored junior developers
            * Improved system performance by 40%
        - title: "Software Engineer"
          company: "Startup Inc"
          location: "New York, NY"
          date_start: "2018-06-01"
          date_end: "2019-12-31"
          description: "Developed web applications using modern technologies"
    design:
      columns: "1"

  - block: collection
    id: projects
    content:
      title: Projects
      text: Here are some projects that I have worked on over the years.
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
      title: Skills & Hobbies
      username: admin
    design:
      show_skill_percentage: false

  - block: resume-awards
    id: awards
    content:
      title: Awards
      username: admin

  - block: resume-languages
    content:
      title: Languages
      username: admin
---
