# Request Specification Quick Reference

*Essential guide for crafting precise, actionable request specifications*

## Core Principles

### Specificity Over Generality

**Do**: Define exact, measurable outcomes

- "Generate a 500-word technical summary with 3 key recommendations"
- "Convert this Markdown file to Word format preserving all formatting"
- "Create a Python function that validates email addresses using regex"

**Don't**: Use vague or ambiguous language

- ❌ "Make this better"
- ❌ "Help with my document"
- ❌ "Write some code"

### Actionable Language

**Use active, specific verbs:**

- Analyze, Convert, Generate, Create, Optimize, Validate
- Summarize, Restructure, Format, Implement, Review

**Avoid passive constructions:**

- ❌ "Something should be done about..."
- ✅ "Analyze the data and identify the top 3 trends"

## Request Structure Template

### 1. Primary Action

```markdown
[VERB] [OBJECT] [CONTEXT]
Example: "Analyze customer feedback data from Q3 2024"
```

### 2. Specific Outcomes

```markdown
**Deliverables:**
- [Outcome 1]: [Measurable criteria]
- [Outcome 2]: [Measurable criteria]
- [Outcome 3]: [Measurable criteria]
```

### 3. Success Criteria

```markdown
**Success Metrics:**
- Quality: [Specific quality indicators]
- Completeness: [Coverage requirements]
- Format: [Structure and presentation requirements]
```

## Common Request Patterns

### Analysis Requests

**Structure:**

```markdown
Analyze [DATA/CONTENT] to identify [SPECIFIC INSIGHTS]

**Required Outputs:**
- Key findings (top [NUMBER])
- Supporting evidence for each finding
- Actionable recommendations

**Analysis Focus:**
- [Dimension 1]: [Specific aspect]
- [Dimension 2]: [Specific aspect]
- [Dimension 3]: [Specific aspect]
```

### Generation Requests

**Structure:**

```markdown
Create [TYPE] for [PURPOSE] targeting [AUDIENCE]

**Content Requirements:**
- Length: [Specific word/page count]
- Tone: [Professional/casual/technical]
- Structure: [Specific organization]

**Key Elements to Include:**
- [Element 1]: [Description]
- [Element 2]: [Description]
- [Element 3]: [Description]
```

### Conversion Requests

**Structure:**

```markdown
Convert [SOURCE] from [FORMAT A] to [FORMAT B]

**Preservation Requirements:**
- All original content and meaning
- Structural hierarchy and organization
- Formatting emphasis (bold, italic, etc.)
- Links and references

**Target Format Specifications:**
- [Specific format requirements]
- [Platform compatibility needs]
- [Quality standards]
```

## Quality Enhancement Techniques

### Adding Context Constraints

**Without Context:**

```markdown
"Write a blog post about AI"
```

**With Context:**

```markdown
"Write a 800-word blog post about AI applications in healthcare for 
small clinic administrators, focusing on practical implementation 
within $10,000 budgets"
```

### Defining Success Metrics

**Basic Request:**

```markdown
"Improve this document"
```

**Enhanced with Metrics:**

```markdown
"Optimize this document for clarity and professional presentation

**Success Criteria:**
- Reduce average sentence length to under 20 words
- Ensure all technical terms are defined
- Organize content with clear headings and bullet points
- Maintain professional tone throughout"
```

### Specifying Deliverable Format

**Vague Format:**

```markdown
"Give me analysis of this data"
```

**Specific Format:**

```markdown
"Provide analysis in the following structure:
1. Executive Summary (2-3 sentences)
2. Key Findings (numbered list with supporting data)
3. Recommendations (prioritized action items)
4. Next Steps (timeline and ownership)"
```

## Common Pitfalls and Solutions

### Pitfall: Multiple Unclear Objectives

**Problem:**

```markdown
"Help me with my presentation and also fix the data and maybe
make some charts and improve the design"
```

**Solution:**

```markdown
"Restructure presentation for executive audience

**Primary Objectives:**
1. Data Analysis: Identify top 3 trends from Q3 sales data
2. Visualization: Create 3 charts highlighting key trends
3. Content Organization: Structure for 15-minute executive briefing

**Deliverables:**
- Refined data analysis with supporting evidence
- Three compelling visualizations (bar chart, line graph, pie chart)
- Executive summary with key recommendations"
```

### Pitfall: Assumption of Context

**Problem:**

```markdown
"Fix the issues in this code"
```

**Solution:**

```markdown
"Debug Python script for data processing

**Specific Issues to Address:**
- Performance: Reduce execution time for large datasets (>10MB)
- Error Handling: Add validation for missing data fields
- Code Quality: Improve readability with better variable names and comments

**Success Criteria:**
- Script processes 100MB file in under 2 minutes
- Handles missing data gracefully without crashing
- Code passes PEP 8 style standards"
```

### Pitfall: No Priority Guidance

**Problem:**

```markdown
"Review this document and make improvements"
```

**Solution:**

```markdown
"Review technical documentation for accuracy and usability

**Priority Order:**
1. Technical Accuracy: Verify all code examples and procedures
2. Clarity: Ensure instructions are clear for intermediate developers
3. Completeness: Identify missing steps or information
4. Style: Improve formatting and presentation

**Focus Areas:**
- Installation procedures (highest priority)
- API documentation (medium priority)
- Troubleshooting section (low priority)"
```

## Scaling Request Complexity

### Individual Use

- Single, focused outcome
- Personal context and preferences
- Immediate application needs

### Team Collaboration

- Multiple stakeholder considerations
- Standardized formats and processes
- Reusable patterns and templates

### Organizational Implementation

- Brand consistency requirements
- Compliance and governance needs
- Scalable, sustainable processes

---

*Clear, specific requests are the foundation of effective AI interaction. Invest time in crafting precise specifications to achieve optimal outcomes.*
