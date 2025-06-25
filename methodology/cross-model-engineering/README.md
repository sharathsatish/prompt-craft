# Cross-Model Engineering

*Platform-agnostic prompt engineering approaches for multi-AI system implementation*

## Overview

Cross-Model Engineering provides systematic methodology for creating prompts that work effectively across
different AI models and platforms. This approach ensures consistency, maintainability, and optimal performance
regardless of the underlying AI system.

## Core Principles

### 1. Platform-Agnostic Design

**Universal Compatibility:**

- Design prompts using common capabilities across all major AI platforms
- Avoid platform-specific features unless absolutely necessary
- Use standardized formatting and structure conventions
- Test across multiple AI systems to validate effectiveness

**Implementation Strategy:**

```markdown
# Universal Prompt Pattern
Character: [Clear role definition using common terminology]
Request: [Action-oriented objective with measurable outcomes]
Examples: [Self-contained demonstrations]
Adjustments: [Clear constraints and quality standards]
Type: [Standard output format specification]
Extras: [Context and additional requirements]
```

### 2. Model-Specific Optimization

**Adaptive Implementation:**

- Understand unique strengths and limitations of each AI model
- Create optimization layers that enhance performance per platform
- Maintain core prompt structure while adjusting for model characteristics
- Document performance differences and optimization decisions

**Optimization Approach:**

1. **Base Implementation**: Universal CREATE Framework structure
2. **Model Adaptation**: Specific adjustments for optimal performance
3. **Performance Testing**: Systematic evaluation across platforms
4. **Documentation**: Record decisions and performance characteristics

### 3. Systematic Testing and Validation

**Multi-Platform Validation:**

- Test prompts across ChatGPT, Claude, Gemini, and other major platforms
- Establish baseline performance metrics for comparison
- Identify and document platform-specific behaviors
- Create fallback strategies for model-specific limitations

**Testing Protocol:**

1. **Baseline Test**: Standard prompt across all platforms
2. **Performance Measurement**: Quality, consistency, and reliability metrics
3. **Optimization Iteration**: Platform-specific improvements
4. **Validation**: Confirm improvements maintain cross-model compatibility

## Implementation Framework

### Phase 1: Universal Foundation

**CREATE Framework Application:**

```markdown
## Character Definition
Define AI role using universal terminology and capabilities common across all platforms.
Avoid platform-specific language or features.

## Request Specification  
Use clear, action-oriented language with measurable outcomes.
Structure requests to work consistently across different AI systems.

## Examples Provision
Provide self-contained examples that demonstrate the pattern clearly.
Ensure examples work regardless of AI model capabilities.

## Adjustments Implementation
Include universal constraints and quality standards.
Define clear boundaries that apply across all platforms.

## Type Specification
Specify output format using standard conventions.
Use common formatting approaches supported by all AI systems.

## Extras Inclusion
Add context and requirements using platform-neutral language.
Include information needed by any AI system to succeed.
```

### Phase 2: Model-Specific Enhancement

**Optimization Layers:**

**ChatGPT Optimization:**

- Leverage strong instruction-following capabilities
- Utilize structured formatting preferences
- Optimize for conversational interaction patterns
- Take advantage of consistent formatting output

**Claude Optimization:**

- Leverage analytical and reasoning strengths
- Optimize for detailed, thoughtful responses
- Utilize strong context retention capabilities
- Take advantage of nuanced instruction interpretation

**Gemini Optimization:**

- Leverage multimodal capabilities when available
- Optimize for factual accuracy and research tasks
- Utilize integration with Google services
- Take advantage of real-time information access

### Phase 3: Performance Validation

**Systematic Evaluation:**

```markdown
## Testing Matrix
| Platform | Performance | Consistency | Quality | Notes |
|----------|-------------|-------------|---------|-------|
| ChatGPT  | [Score]     | [Score]     | [Score] | [Observations] |
| Claude   | [Score]     | [Score]     | [Score] | [Observations] |
| Gemini   | [Score]     | [Score]     | [Score] | [Observations] |

## Success Criteria
- Minimum 80% performance consistency across platforms
- All platforms produce usable output for intended purpose
- Quality differences documented and explained
- Optimization strategies validated and documented
```

## Design Patterns

### Pattern 1: Universal Base + Model Adaptations

**Base Structure:**

```markdown
You are a [ROLE] with expertise in [DOMAIN]. 

Analyze [INPUT] and provide [SPECIFIC OUTPUT].

**Requirements:**
- [Universal requirement 1]
- [Universal requirement 2]
- [Universal requirement 3]

**Output Format:**
[Standard format specification]
```

**Model-Specific Adaptations:**

```markdown
# ChatGPT Enhancement
Additional instruction: "Use structured formatting with clear headings and bullet points."

# Claude Enhancement  
Additional instruction: "Provide detailed reasoning for each conclusion."

# Gemini Enhancement
Additional instruction: "Verify facts and include confidence levels for assessments."
```

### Pattern 2: Capability-Based Routing

**Implementation Strategy:**

```markdown
## Primary Prompt (All Models)
[Universal CREATE Framework implementation]

## Capability Enhancements
IF model supports advanced reasoning:
  - Add: "Provide step-by-step logical analysis"
  
IF model supports real-time data:
  - Add: "Include current information when relevant"
  
IF model supports multimodal:
  - Add: "Consider visual elements if provided"
```

### Pattern 3: Fallback Strategy Design

**Robust Implementation:**

```markdown
## Primary Approach
[Optimal prompt for advanced models]

## Simplified Fallback
[Reduced complexity version for basic models]

## Validation Check
Test both versions to ensure:
- Primary approach works on target platforms
- Fallback maintains acceptable quality
- Transition criteria are clearly defined
```

## Quality Assurance

### Cross-Model Consistency

**Validation Checklist:**

- [ ] Prompt works without modification on all target platforms
- [ ] Output quality meets minimum standards across all models
- [ ] Performance differences are documented and explained
- [ ] Optimization strategies are validated and maintainable

### Performance Optimization

**Measurement Framework:**

```markdown
## Quality Metrics
- Accuracy: [Measurement method]
- Consistency: [Measurement method] 
- Usability: [Measurement method]
- Efficiency: [Measurement method]

## Platform Comparison
- Best Performance: [Platform] - [Reason]
- Most Consistent: [Platform] - [Reason]
- Most Reliable: [Platform] - [Reason]
- Recommended for: [Use case] - [Platform]
```

### Maintenance Strategy

**Systematic Updates:**

1. **Regular Testing**: Monthly validation across all platforms
2. **Performance Tracking**: Ongoing measurement and comparison
3. **Optimization Updates**: Continuous improvement based on results
4. **Documentation**: Maintain current records of platform differences

## Implementation Examples

### Example 1: Document Analysis

**Universal Base:**

```markdown
# Document Analysis Workflow

## Character
You are a technical document analyst with expertise in content evaluation and improvement recommendations.

## Request
Analyze the provided document and identify the top 3 areas for improvement with specific recommendations.

## Examples
[Self-contained example of analysis process and output format]

## Adjustments
- Focus on actionable improvements
- Provide specific recommendations, not general advice
- Support each recommendation with evidence from the document

## Type
Provide output as:
1. Executive Summary (2-3 sentences)
2. Top 3 Improvement Areas (detailed analysis)
3. Specific Recommendations (actionable steps)

## Extras
Consider the document's intended audience and purpose when making recommendations.
```

**Platform Optimizations:**

```markdown
# ChatGPT: Enhanced structure focus
Additional: "Use clear section headings and bullet point formatting for recommendations."

# Claude: Enhanced analytical depth  
Additional: "Provide detailed reasoning for each improvement recommendation."

# Gemini: Enhanced factual verification
Additional: "Verify any claims or statistics mentioned in the document."
```

### Example 2: Code Review

**Universal Base:**

```markdown
# Code Review Workflow

## Character
You are a senior software engineer conducting a thorough code review.

## Request
Review the provided code for quality, security, and best practices. Identify issues and provide improvement suggestions.

## Examples
[Example of thorough code review with specific feedback]

## Adjustments
- Focus on critical issues first (security, performance, bugs)
- Provide specific line-by-line feedback when relevant
- Include positive observations along with improvement areas

## Type
Output Format:
1. Summary Assessment (overall quality rating)
2. Critical Issues (security, bugs, performance)
3. Best Practice Improvements (code quality, maintainability)
4. Positive Aspects (what's done well)

## Extras
Consider the codebase context and the apparent skill level of the developer.
```

## Model Integration Resources

Platform-specific guidance available:

- [GitHub Copilot Integration](../create-framework/llm-integrations/github-copilot-integration.md)
- [ChatGPT Integration](../create-framework/llm-integrations/chatgpt-integration.md)
- [Claude Projects Integration](../create-framework/llm-integrations/claude-projects-integration.md)
- [Google Gemini Integration](../create-framework/llm-integrations/gemini-integration.md)
- [Microsoft 365 Copilot Integration](../create-framework/llm-integrations/m365-copilot-integration.md)

## Success Metrics

### Individual Implementation

- Prompt works effectively across chosen AI platforms
- Quality differences are predictable and documented
- Maintenance effort is minimal and systematic

### Team Adoption

- Consistent results across team members using different AI platforms
- Standardized optimization approaches
- Shared knowledge of platform differences and best practices

### Organizational Scaling

- Platform-agnostic prompt libraries
- Systematic evaluation and improvement processes
- Strategic AI platform decisions based on validated performance data

---

*Cross-Model Engineering ensures your prompt engineering investment scales across AI platforms and evolves with the rapidly changing AI landscape.*
