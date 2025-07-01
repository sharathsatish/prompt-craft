---
name: 'Create Test Plan for Implementation Prompt'
author: 'Sharath Satish'
mode: 'agent'
tools: ['read_file', 'write_file', 'create_directory', 'move_file', 'replace_string_in_file', 'insert_edit_into_file', 'run_in_terminal', 'file_search', 'grep_search', 'list_dir']
description: 'Systematic prompt for creating comprehensive test plans from implementation plans for any product or platform.'
---

# Create Test Plan for Implementation Prompt

I'm an expert test planner who will help you systematically create comprehensive test plans from implementation
plans for any product or platform. This prompt follows proven, repeatable steps to ensure clarity, coverage, and
production-readiness.

**Tip:** Use the sample PRD template in `snippets/prd-template.md` as a reference for requirements and structure.

## Essential Test Planning Steps

### 1. Pre-Planning Checklist

- [ ] Implementation plan is complete and clear
- [ ] Familiarity with current codebase and test coverage
- [ ] Testing environment is set up

### 2. Analyze Implementation Plan

- Read the implementation plan thoroughly
- Identify all features and components to be tested
- Review existing test files and coverage
- Note any specific requirements or constraints

### 3. Define Test Plan Structure

- Create a test plan document with clear metadata and required sections
- Include executive summary, feature overview, test strategy, detailed test plan, and success metrics
- Use tables and diagrams where helpful

### 4. Systematic Test Planning

- For each feature/component:
  - Define unit, integration, and end-to-end tests
  - Specify test cases, coverage targets, and priorities
  - Assess current vs. required test coverage
  - Plan for automation and CI integration

### 5. Quality Assurance and Validation

- Ensure test plan covers all implementation plan requirements
- Validate accuracy of current test status
- Provide actionable roadmap and next steps
- Include risk mitigation and maintenance guidance

### 6. Finalization and Handoff

- Save the test plan in the appropriate location
- Communicate completion and next steps to team

**Reference:** See `snippets/prd-template.md` for a sample PRD structure.

## Objective

Generate a comprehensive test plan document for any feature implementation plan that serves as both test coverage
documentation and living feature capabilities documentation.

## Prerequisites

- Access to the feature implementation plan document
- Understanding of the project structure and existing test coverage
- Access to examine current test files to assess implementation status

## Input Requirements

1. **Implementation Plan Document**: Full path to the implementation plan markdown file
2. **Feature Name**: Clear feature name for the test plan (e.g., "Repository Invocation", "Watermarking System")
3. **Test Plan Output Location**: Directory path where the test plan should be created
4. **Optional Context**: Any specific testing requirements or constraints

## Prompt Template

```text
Based on the implementation plan for [FEATURE_NAME], create a comprehensive test plan that serves dual purposes:

1. **Test Coverage Documentation**: Complete testing strategy across all levels
2. **Feature Capabilities Documentation**: Living documentation of implemented features and current status

### Requirements:

### 1. Analysis Phase

First, thoroughly analyze:

- Read the implementation plan document at: [IMPLEMENTATION_PLAN_PATH]
- Examine existing test files to understand current coverage:
  - Check `src/__tests__/unit/` for existing unit tests
  - Check `src/__tests__/integration/` for integration tests
  - Check `src/__tests__/fixtures/` and `src/__tests__/helpers/` for test infrastructure
- Review the source code files mentioned in the implementation plan
- Assess current vs. required test coverage

### 2. Test Plan Structure

Create a test plan document with the following structure:

**Document Metadata:**

```yaml
---
lastUpdated: "[CURRENT_DATE]"
title: "[FEATURE_NAME] Feature Test Plan"
documentType: "Test Plan"
version: "1.0"
status: "Active"
featureOwner: "docs-agent-team"
testLevels: ["unit", "integration", "end-to-end", "cross-platform"]
---
```

**Required Sections:**

1. **Executive Summary**
   - Feature overview and test plan purpose
   - Dual-purpose documentation explanation
   - Key testing objectives

2. **Feature Overview**
   - Core capabilities from implementation plan
   - Technical components to be tested
   - Cross-platform requirements

3. **Test Strategy Framework**
   - Test pyramid structure (Mermaid diagram)
   - Coverage targets by test level
   - Quality gates and acceptance criteria

4. **Detailed Test Plan**

   **Unit Tests (Target: 80-100 tests)**
   - Break down by major components/classes from implementation plan
   - For each component:
     - Current status (✅ Implemented / ❌ Not Implemented / 🟡 Partially Implemented)
     - Priority level (P0-Critical, P1-High, P2-Medium)
     - Target coverage percentage
     - Detailed test case tables with:
       - Test case names (descriptive, snake_case)
       - Test descriptions
       - Current implementation status
       - Priority level

   **Integration Tests (Target: 20-30 tests)**
   - CLI command integration
   - Component interaction workflows
   - Cross-platform compatibility
   - End-to-end workflows

   **End-to-End Tests (Target: 5-10 tests)**
   - Complete user scenarios
   - Error recovery flows
   - Advanced use cases

5. **Test Implementation Status Summary**
   - Current coverage analysis (percentage breakdown)
   - Missing critical tests identification
   - Priority implementation roadmap with phases

6. **Test Automation & CI Integration**
   - Automated execution flow (Mermaid diagram)
   - Quality gates for pre-merge and release
   - Test environment setup instructions

7. **Success Metrics & Acceptance Criteria**
   - Code coverage targets
   - Quality metrics (bug escape rate, execution time, reliability)
   - Feature completeness indicators

8. **Risk Mitigation**
   - Test-related risks and mitigation strategies
   - Technical debt tracking and remediation plans

9. **Conclusion & Next Steps**
   - Implementation phases with timelines
   - Ongoing maintenance approach

### 3. Test Case Specification Standards

For each test case, provide:

- **Descriptive Name**: Use snake_case, be specific about what's being tested
- **Clear Description**: What the test validates in business terms
- **Current Status**: Based on actual examination of existing test files
- **Priority**: P0 (Critical for core functionality), P1 (High for user experience), P2 (Medium for edge cases)

### 4. Status Assessment Accuracy

Accurately mark test implementation status by:

- Examining actual test files in the codebase
- Checking for existing test cases that cover the functionality
- Distinguishing between fully implemented, partially implemented, and not implemented
- Providing realistic coverage estimates based on current state

### 5. Implementation Roadmap

Create a phased approach:

- **Phase 1 (P0)**: Critical foundation tests (2 weeks)
- **Phase 2 (P1)**: User experience and integration tests (1 week)
- **Phase 3 (P2)**: Polish and edge case tests (1 week)

### 6. Visual Documentation

Include Mermaid diagrams for:

- Test pyramid structure showing test distribution
- CI/CD automation flow
- Any feature-specific test flows

### 7. Practical Commands

Provide ready-to-use PowerShell commands for:

- Running different test suites
- Coverage analysis
- Cross-platform testing
- Development workflows

### Output Requirements

1. **File Location**: Create the test plan at: [OUTPUT_PATH]/[feature-name]-test-plan.md
2. **Professional Quality**: Production-ready documentation following docs-agent standards
3. **Actionable Content**: Clear next steps and implementation guidance
4. **Living Document**: Designed to be updated as features and tests evolve
5. **Dual Purpose**: Serves as both testing strategy and feature documentation

### Quality Standards

- **Comprehensive**: Cover all aspects mentioned in the implementation plan
- **Accurate**: Reflect actual current test implementation status
- **Actionable**: Provide clear priorities and next steps
- **Professional**: Follow markdown standards and docs-agent conventions
- **Visual**: Include helpful diagrams and structured tables
- **Cross-Platform**: Address Windows, macOS, and Linux compatibility

### Example Test Case Format

```markdown
##### [Component] Tests

| Test Case | Description | Status | Priority |
|-----------|-------------|--------|----------|
| `validate_input_parameters` | Should validate all input parameters correctly | ✅ Implemented | P0 |
| `handle_invalid_configurations` | Should throw appropriate errors for invalid configs | ❌ Not Implemented | P0 |
| `process_cross_platform_paths` | Should handle paths correctly across platforms | 🟡 Partially Implemented | P1 |
```

Create the comprehensive test plan now, ensuring it captures all implementation plan requirements and provides accurate current status assessment.

## Usage Instructions

### Step 1: Prepare Inputs

```bash
# Identify the implementation plan
IMPLEMENTATION_PLAN_PATH="docs/product/releases/release-1/implementation-plans/[feature]-implementation-plan.md"

# Define feature name
FEATURE_NAME="[Your Feature Name]"

# Set output location
OUTPUT_PATH="docs/product/releases/release-1/test-plans"
```

### Step 2: Execute the Prompt

Replace the placeholders in the prompt template:

- `[FEATURE_NAME]`: The specific feature name
- `[IMPLEMENTATION_PLAN_PATH]`: Full path to the implementation plan
- `[OUTPUT_PATH]`: Directory where test plan should be created
- `[CURRENT_DATE]`: Current date in YYYY-MM-DD format

### Step 3: Review and Validate

After generation:

1. Verify all implementation plan components are covered
2. Confirm test status accuracy by checking actual test files
3. Validate that coverage targets are realistic
4. Ensure the test plan provides actionable next steps

## Expected Output Quality

The generated test plan should:

### ✅ Content Quality

- **Comprehensive Coverage**: All implementation plan features addressed
- **Accurate Status**: Reflects actual current test implementation
- **Actionable Roadmap**: Clear phases with realistic timelines
- **Professional Structure**: Follows docs-agent documentation standards

### ✅ Technical Accuracy

- **Realistic Test Counts**: Based on feature complexity
- **Appropriate Priorities**: P0 for critical, P1 for important, P2 for nice-to-have
- **Cross-Platform Awareness**: Windows, macOS, Linux considerations
- **Integration Points**: Component interaction testing

### ✅ Usability Features

- **Visual Diagrams**: Mermaid diagrams for test strategy and automation
- **Ready-to-Use Commands**: PowerShell/npm commands for immediate use
- **Status Tracking**: Clear indicators of implementation progress
- **Risk Mitigation**: Identified risks with concrete mitigation strategies

## Success Criteria

A successful test plan generation includes:

1. **Complete Feature Coverage**: Every implementation plan component has corresponding tests
2. **Accurate Current State**: Test status reflects actual codebase examination
3. **Actionable Roadmap**: Clear priorities and implementation phases
4. **Quality Standards**: Meets professional documentation standards
5. **Dual Purpose Achievement**: Serves as both test strategy and feature documentation

## Maintenance

This prompt should be updated when:

- New test levels or categories are introduced
- Documentation standards change
- Test automation workflows evolve
- Quality gates or coverage targets are modified

## Related Resources

- [Repository Invocation Test Plan](../../../docs/product/releases/release-1/test-plans/repo-invocation-test-plan.md) - Example output
- [Implementation Plan Template](./create-implementation-plan.md) - Input document format
- [Testing Guidelines](../../docs/development/testing-standards.md) - Testing standards reference

## Best Practices: ALWAYS / NEVER

**ALWAYS:**

- Cover every requirement and component from the implementation plan.
- Specify clear, actionable, and prioritized test cases.
- Include both positive and negative scenarios.
- Validate current test coverage before planning new tests.

**NEVER:**

- Assume coverage without checking actual test files.
- Leave test cases without status or priority.
- Ignore edge cases or error handling.
- Overlook automation and CI integration.
