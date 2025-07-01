---
name: 'Comprehensive PRD Writing Prompt'
author: 'Sharath Satish'
mode: 'agent'
tools: ['read_file', 'write_file', 'semantic_search', 'list_dir', 'run_in_terminal']
description: 'Systematic prompt for product managers to draft comprehensive Product Requirements Documents (PRDs) for any product or feature.'
---

# 📋 Comprehensive PRD Writing Prompt

This prompt provides a systematic methodology for product managers and teams to draft comprehensive Product Requirements
Documents (PRDs) for any product or feature. It follows established patterns from successful PRDs and ensures consistency,
completeness, and implementability across projects and organizations.

**Tip:** A sample PRD template is available in the `snippets/prd-template.md` file. Use this as a starting point or
reference for your own PRDs.

## 📝 PRD Template

**Before starting**, familiarize yourself with your team's PRD template, use the provided example in
`snippets/prd-template.md`, or use a standard structure that includes:

- **Complete PRD Structure**: Pre-defined sections for all key aspects of a product or feature
- **Guidance for AI or Technical Features**: Sections for model integration, prompt engineering, or technical context if relevant
- **Implementation-Ready Format**: Structure that supports a step-by-step implementation process
- **Quality Standards**: Built-in validation checklist and quality gates

**Usage Instructions:**

1. **Copy the template** from your team's documentation or use the example in `snippets/prd-template.md`
2. **Follow this prompt** to systematically fill out each section
3. **Use the template's validation checklist** to ensure completeness
4. **Reference successful PRDs** to understand patterns and quality standards

The template provides the structure; this prompt provides the methodology for filling it out effectively.

## 🎯 PRD Creation Process

### Step 1: Research and Foundation

**Prompt Template:**

```markdown
I need to draft a new PRD for [FEATURE_NAME] in our product.

Before I start writing, please help me research and understand:

1. **Existing PRDs Analysis**:
   - Read all existing PRDs in the relevant directory or repository
   - Identify common patterns, structure, and language used
   - Note successful PRD examples for reference

2. **Project Context**:
   - Review the product roadmap and implementation sequence
   - Check current status for the feature or related areas
   - Understand how this feature fits into the overall architecture

3. **Dependencies and Relationships**:
   - Identify which existing PRDs or features this might depend on
   - Determine what future features this might enable
   - Check for potential conflicts or overlaps

4. **Current Codebase State**:
   - Review the codebase structure to understand current capabilities
   - Check existing types and interfaces if applicable
   - Identify integration points for the new feature

Please provide a summary of findings and recommendations for structuring this PRD.
```

**Expected Output**: Research summary with PRD structure recommendations and dependency mapping

### Step 2: Define Feature Scope and Value

**Prompt Template:**

```markdown
Based on the research, let's define the scope and value proposition for [FEATURE_NAME].

Please help me draft:

1. **Executive Summary** (2-3 paragraphs):
   - Clear definition of what this feature does
   - Primary value proposition and target users
   - Relationship to existing features or PRDs (builds on, enables, depends on)

2. **Independent Value Proposition**:
   - Immediate value this feature provides standalone
   - Benefits users get even without other features
   - Why this feature matters independently

3. **Problem Statement** (Current Challenges section):
   - 3-5 specific problems this feature solves
   - Business or user impact of these problems
   - Real-world scenarios where users encounter these issues

4. **Solution Overview**:
   - High-level approach to solving the identified problems
   - Core concept in 2-3 sentences
   - Key benefits this solution provides

Use existing PRD patterns:
- Focus on MVP scope, not future enhancements
- Be specific about value proposition
- Include concrete impact statements
- Reference related features or PRDs with proper links
```

**Expected Output**: Complete executive summary, problem statement, and solution overview sections

### Step 3: Define Functional Requirements

**Prompt Template:**

```markdown
Now let's define the detailed functional requirements for [FEATURE_NAME].

Please help me create:

1. **Functional Requirements Structure**:
   - Break down the feature into 3-5 major functional areas
   - For each area, create a functional requirement (FR-1, FR-2, etc.)
   - Use High/Medium priority classification

2. **Requirement Format** (for each FR):

   ### FR-X: [Requirement Name]
   **Priority**: High/Medium
   **Description**: Clear description of what this requirement accomplishes

   #### Acceptance Criteria
   - [ ] Specific, testable criteria
   - [ ] Measurable outcomes
   - [ ] Edge cases covered
   - [ ] Error handling requirements

3. **Success Criteria**:
   - Performance targets (if applicable)
   - User experience goals
   - Technical achievement metrics
   - Integration success indicators

4. **MVP Scope Definition**:
   - What's included in the minimum viable implementation
   - What's excluded from initial release
   - Clear boundaries for this PRD

Follow existing patterns:
- Use checkbox format for acceptance criteria
- Include specific technical requirements
- Cover error handling and edge cases
- Define measurable success metrics
```

**Expected Output**: Complete functional requirements with acceptance criteria and success metrics

### Step 4: Define Technical Architecture

**Prompt Template:**

```markdown
Let's define the technical architecture and implementation approach for [FEATURE_NAME].

Please help me outline:

1. **System Architecture**:
   - New classes/components needed
   - Integration points with existing code
   - Data flow and processing pipeline
   - Configuration requirements

2. **Technical Requirements**:
   - Interfaces or APIs needed
   - New manager classes or services
   - Integration requirements
   - Configuration schema updates

3. **Implementation Considerations**:
   - Backwards compatibility requirements
   - Performance considerations
   - Error handling strategy
   - Testing approach

4. **Dependencies and Integration**:
   - Which existing components to leverage
   - New dependencies to add
   - Integration with main workflow
   - Command or API structure

Base this on patterns from the existing codebase:
- Follow directory structure conventions
- Use existing manager/service patterns
- Integrate with configuration and logging utilities
- Follow existing error handling patterns
```

**Expected Output**: Technical architecture section with implementation guidance

### Step 5: Define User Experience

**Prompt Template:**

```markdown
Now let's define the user experience and interface for [FEATURE_NAME].

Please help me specify:

1. **User Interface**:
   - New command flags, options, or UI elements needed
   - Command syntax and examples
   - Help text and documentation
   - Error messages and user feedback

2. **Configuration Options**:
   - New configuration fields
   - Default values and validation rules
   - Optional vs required settings
   - Configuration examples

3. **User Workflows**:
   - Step-by-step user journey for common scenarios
   - Expected input and output examples
   - Success and error scenarios
   - Integration with existing workflows

4. **Documentation and Help**:
   - User-facing documentation needs
   - Help text and examples
   - Troubleshooting guide requirements
   - README or help updates needed

Follow existing patterns:
- Use similar flag or UI naming conventions
- Provide clear configuration examples
- Include comprehensive error messages
- Design for both novice and expert users
```

**Expected Output**: Complete user experience specification with interface and configuration options

### Step 6: Define Testing and Quality Assurance

**Prompt Template:**

```markdown
Let's define the testing strategy and quality requirements for [FEATURE_NAME].

Please help me specify:

1. **Testing Requirements**:
   - Unit test coverage expectations (aim for high coverage)
   - Integration test scenarios
   - End-to-end test cases
   - Performance test requirements

2. **Quality Gates**:
   - Acceptance criteria for implementation completion
   - Performance benchmarks to meet
   - Error handling validation requirements
   - Documentation quality standards

3. **Validation Scenarios**:
   - Happy path test cases
   - Error condition handling
   - Edge case coverage
   - Backwards compatibility verification

4. **Success Metrics**:
   - Quantifiable success criteria
   - Performance improvement targets
   - User experience benchmarks
   - Code quality metrics

Use existing testing patterns:

- Follow your team's testing conventions
- Include mock strategies for external dependencies
- Define specific performance targets where applicable
- Ensure comprehensive error scenario coverage
```

**Expected Output**: Testing strategy and quality assurance requirements

### Step 7: Finalize PRD Structure

**Prompt Template:**

```markdown
Now let's finalize the complete PRD document for [FEATURE_NAME].

Using your team's PRD template as your base structure, please create the final PRD:

1. **Start with Template**: Copy the PRD template from your documentation or repository

2. **Fill Required Sections**: Use the content you've developed in previous steps to populate:

   - Executive Summary (from Step 2)
   - Independent Value Proposition (from Step 2)
   - Problem Statement (from Step 2)
   - Solution Overview (from Step 2)
   - Functional Requirements (from Step 3)
   - Technical Architecture (from Step 4)
   - User Experience (from Step 5)
   - Testing and Quality Assurance (from Step 6)
   - Implementation Considerations
   - Success Criteria
   - Future Enhancements (brief, out-of-scope items)

3. **Complete YAML Frontmatter**:

   ```yaml
   ---
   lastUpdated: "[CURRENT_DATE]"
   title: "[FEATURE_NAME]"
   documentType: "Product Requirements Document"
   version: "1.0"
   status: "Draft"
   priority: "High/Medium"
   ---
   ```

1. **Enhancements for Technical or AI Features**: Ensure all technical or AI-related sections from the template are completed if relevant

2. **Cross-References**:
   - Link to related PRDs or documentation appropriately
   - Reference implementation sequence documentation
   - Include proper markdown link formatting

3. **Template Validation**: Use the PRD Validation Checklist from the template:
   - Ensure all template sections are complete
   - Verify technical feasibility aligns with your architecture
   - Confirm scope is appropriate for a single PRD
   - Check that all requirements are testable and measurable
   - Validate technical or AI-specific requirements are comprehensive if applicable

Save the final PRD as: [feature-name]-prd.md in your team's documentation or repository

```markdown

**Expected Output**: Complete, publication-ready PRD document

## 📚 PRD Quality Standards

### Content Requirements

- **MVP Focus**: Concentrate on essential features only, move enhancements to future considerations
- **Specific Requirements**: All requirements must be testable and measurable
- **Technical Feasibility**: Ensure requirements align with existing architecture
- **User-Centered**: Clear value proposition and user benefit articulation

### Structure Standards

- **Consistent Format**: Follow the exact YAML frontmatter and section structure
- **Clear Hierarchy**: Use proper markdown heading levels and numbering
- **Cross-References**: Link to related PRDs and documentation appropriately
- **Completeness**: All sections must be filled out, no placeholders

### Language Guidelines

- **Active Voice**: Use clear, direct language with active voice
- **Specific Metrics**: Include quantifiable success criteria where possible
- **Technical Accuracy**: Ensure technical details align with codebase reality
- **Business Value**: Clearly articulate business impact and user benefits

## 🔄 PRD Refinement Process

### After Initial Draft

1. **Technical Review**: Validate feasibility with current architecture
2. **Scope Adjustment**: Ensure feature scope is appropriate for single PRD
3. **Dependency Check**: Verify relationships with other PRDs or features are accurate
4. **Implementation Planning**: Consider if requirements support clear implementation path

### Before Finalization

1. **Stakeholder Review**: Get feedback from development team or stakeholders
2. **Priority Validation**: Confirm priority level aligns with roadmap
3. **Success Criteria**: Ensure all success metrics are measurable
4. **Documentation**: Verify all references and links are correct

## 📖 Reference Examples

### PRD Template and Structure

- **Standard PRD Template**: Complete template with all required sections and validation checklist
- **Template Usage Guidelines**: Comprehensive guidance for product managers and implementation teams
- **Quality Standards**: Built-in completeness, specificity, and implementation support requirements

### Successful PRD Examples

- **Feature A PRD**: Excellent technical architecture and performance targets
- **Initial Documentation Scaffold**: Clear scenario-based requirements and user workflows
- **Feature B PRD**: Good foundation feature with multiple strategies

### Key Patterns to Follow

- **Independent Value**: Every PRD must provide standalone value
- **Relationship Mapping**: Clear dependencies and enablement relationships
- **Technical Integration**: Specific integration points with existing code
- **User Experience**: Complete interface and configuration specifications
- **Technical or AI-First Design**: Leverage template's technical or AI-specific sections for comprehensive features if relevant

## 🎯 Success Checklist

A completed PRD should have:

- [ ] **Template Structure**: Used a standard PRD template as the base structure
- [ ] **Clear executive summary** with value proposition
- [ ] **Specific problem statement** with business or user impact
- [ ] **Detailed functional requirements** with acceptance criteria
- [ ] **Technical architecture** aligned with existing codebase
- [ ] **Complete user experience** specification including interface and configuration
- [ ] **Comprehensive testing strategy** with quality requirements
- [ ] **Measurable success criteria** for effectiveness and performance
- [ ] **Proper cross-references** to related PRDs and implementation sequence
- [ ] **MVP scope clearly defined** with features prioritized
- [ ] **Future enhancements** identified but not included in current scope
- [ ] **Template validation** completed using the built-in checklist

This guide, combined with a standard PRD template, ensures your PRD will be comprehensive, implementable, and
aligned with best practices for product development.

## Best Practices: ALWAYS / NEVER

**ALWAYS:**

- Use the standard PRD template as your base.
- Make every requirement testable and measurable.
- Clearly define MVP scope and exclude enhancements.
- Cross-reference related PRDs and documentation.
- Validate technical feasibility with the current architecture.

**NEVER:**

- Leave sections incomplete or with placeholders.
- Include vague, untestable, or non-measurable requirements.
- Overload the PRD with future enhancements.
- Ignore dependencies or integration points.
