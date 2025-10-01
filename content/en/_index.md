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
      title: Working Experience
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: True

  - block: markdown
    content:
      title: "Research Experience"
      subtitle: "More details below"
      text: |
        ## Research Experience

        ### Multi-Objective Optimization of GFlowNet  
        **Tongji University**  
        *Feb 2025 – Dec 2025*  
        - Extended the original GFlowNet framework from single-objective to multi-objective optimization, integrating reward, cost, and diversity objectives  
        - Designed a new objective formulation with additional evaluation metrics, applying concepts from evolutionary game theory to model trade-offs and dynamic policy updates  
        - Implemented and validated the extended model on molecular datasets, demonstrating improved sample cost and reward performance over the baseline  

        ---

        ### Multi-Agent Spatio-temporal Coordination (Research Assistant)  
        **Tongji University**  
        *Feb 2025 – Dec 2025*  
        - Conducted research on multi-agent spatiotemporal coordination in embodied intelligence, with focus on collaborative perception, task planning, and motion synchronization  
        - Explored strategies for communication and policy learning among agents to enable robust cooperation for perception and prediction  
        - Enhanced the generalization capability of embodied agents across diverse domestic scenarios (e.g., autonomous driving)  
        - [📄 Competition Certificate](https://jimmyhoulala.github.io/uploads/embodied_intelligence.pdf)  
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
