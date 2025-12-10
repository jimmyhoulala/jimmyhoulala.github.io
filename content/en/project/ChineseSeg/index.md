---
title: BiLSTM-CRF Chinese Word Segmentation System
date: 2025-02-01
external_link: https://github.com/jimmyhoulala/bilstm-crf-chinese-word-segmentation
tags:
  - Chinese word segmentation
  - Machine Learning
  - BiLSTM-CRF
---

This project implements a Chinese Word Segmentation (CWS) system based on a BiLSTM-CRF architecture, enhanced with several advanced features such as pretrained character embeddings, character-type embeddings, bigram embeddings, multi-corpus training, a customized CRF decoder with illegal transition constraints, loss visualization, and evaluation utilities.
The system supports common CWS datasets including MSRA, PKU, and Souhu, and provides a complete workflow from data preprocessing → vocabulary construction → model training → evaluation → inference.
Experiments show that the model achieves an F1 score of approximately 0.91 on the MSRA benchmark. The project is modular, extendable, and suitable for both engineering use and academic exploration.

<!--more-->
