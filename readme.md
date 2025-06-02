# Agentic AI for Object Tracking in Videos: Research Progress

> [🇨🇳 中文版本](readme_ch.md) | 🇺🇸 English Version

## Background

**Agentic AI** is an emerging artificial intelligence paradigm that possesses autonomy, reasoning capabilities, and tool-using abilities. This AI system can:
- Autonomously formulate plans and strategies
- Use multiple tools and resources
- Perform complex reasoning and decision-making
- Intelligently interact with environments

### Agentic AI in Video Object Tracking

In the field of video object tracking, Agentic AI represents a revolutionary approach:

**Traditional Methods vs. Agent-based Methods**
- **Traditional Methods**: Rely on end-to-end trained deep learning models, requiring large amounts of annotated data
- **Agent-based Methods**: Combine multiple tools and reasoning capabilities to handle complex scenarios more flexibly

**Main Application Scenarios**
- **Smart Cities**: Traffic monitoring, crowd management
- **Industrial Manufacturing**: Equipment monitoring, safety management
- **Retail**: Customer behavior analysis, theft prevention
- **Healthcare**: Patient monitoring, behavior analysis
- **Sports**: Athlete tracking, match analysis

## Research Progress

### 1. Reinforcement Learning-based Active Object Tracking

**TrackAgent (ICVS 2023)** transforms 6DOF object pose tracking into a reinforcement learning decision task. It achieves 3D point cloud frame-by-frame alignment through learning agents, converting geometric registration problems into sequential decision optimization. The agent can autonomously judge tracking confidence and actively trigger re-initialization mechanisms during high uncertainty.

### 2. Multi-Agent and Embodied Tracking Systems

**CSAOT (AAMAS 2025)** employs multiple coordinated reinforcement learning agents for object tracking, running multi-agents on a single device to handle different tasks. It uses mixture-of-experts strategies to decide camera movements, improving robustness against fast motion and occlusion. The active vision paradigm combines motion and perception strategies, learning information-rich perspectives through intrinsic rewards.

### 3. Vision-Language Guided Tracking

**MemVLT (NeurIPS 2024)** uses text descriptions to guide video object tracking, employing adaptive memory mechanisms to update prompts based on target appearance changes. It achieves 69.4% success AUC on the MGIT dataset, improving 8.4% over baselines. This demonstrates the fusion of visual perception and language understanding in intelligent agents.

## Open Source Projects

### 1. VideoAgent (ECCV 2024)
The first memory-augmented multimodal agent for video understanding, achieving performance comparable to Gemini 1.5 Pro on video understanding tasks. The agent adopts an innovative two-stage architecture:

**Core Technical Features**
- **Memory Construction Stage**: Represents videos as structured memory
  - **Temporal Memory**: Stores event descriptions and features for every 2-second video segment
  - **Object Memory**: Manages object information in videos through object detection, tracking, and re-identification

- **Inference Stage**: Large language models extract information from memory through tool calls
  - Segment description recall
  - Segment localization
  - Visual question answering
  - Object memory queries

**Open Source Resources**
- **Project URL**: [https://github.com/YueFan1014/VideoAgent](https://github.com/YueFan1014/VideoAgent)
- **Project Homepage**: [https://videoagent.github.io/](https://videoagent.github.io/)
- **Online Demo**: Supports Gradio interactive demo for video upload and Q&A
- **Complete Implementation**: Includes environment configuration, model weights, inference scripts, etc.

### 2. VLM-R1 (2025)
A stable and generalizable R1-style Large Vision-Language Model that uses reinforcement learning methods to train visual understanding tasks, achieving SOTA performance on multiple benchmarks.

**Core Technical Features**
- **R1-style Reasoning**: Adopts DeepSeek-R1's reasoning mode for visual understanding
- **Reinforcement Learning Optimization**: Uses GRPO (Generalized Reward Policy Optimization) instead of traditional SFT methods
- **Enhanced Generalization**: More stable performance on out-of-domain data compared to SFT models
- **Multi-task Support**:
  - **REC**: Referring Expression Comprehension for precise visual localization
  - **OVD**: Open-Vocabulary Detection, achieving SOTA on OVDEval
  - **Math**: Multi-modal mathematical reasoning, ranking top on OpenCompass Math Leaderboard

**Technical Advantages**
- **Training Stability**: R1 models show consistent improvement in few-shot training
- **Strong Generalization**: Superior performance on out-of-domain test data compared to traditional methods
- **Multi-node Support**: Supports large-scale distributed training
- **Flexible Architecture**: Based on Qwen2.5-VL, supports multi-image input

**Open Source Resources**
- **Project URL**: [https://github.com/om-ai-lab/VLM-R1](https://github.com/om-ai-lab/VLM-R1)
- **Online Demos**: 🤗 [REC Demo](https://huggingface.co/spaces/omlab/VLM-R1-REC) | 🤗 [OVD Demo](https://huggingface.co/spaces/omlab/VLM-R1-OVD)
- **Model Weights**: Provides specialized models for REC, OVD, Math, and more
- **Training Data**: 🤗 [REC Training Data](https://huggingface.co/datasets/omlab/REC-data)
- **Complete Training Scripts**: Supports GRPO, SFT, multi-node training configurations
