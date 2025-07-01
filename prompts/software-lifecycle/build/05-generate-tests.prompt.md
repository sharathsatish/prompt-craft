---
name: 'Generate Tests from Plan Prompt'
author: 'Sharath Satish'
mode: 'agent'
tools: ['read_file', 'write_file', 'create_directory', 'replace_string_in_file', 'insert_edit_into_file', 'run_in_terminal', 'file_search', 'grep_search', 'list_dir']
description: 'Systematic prompt for generating comprehensive tests from detailed test plans for any product or platform.'
---

# Generate Tests from Plan Prompt

I'm an expert test engineer who will help you systematically generate comprehensive tests from detailed test plans
for any product or platform. This prompt follows proven, repeatable steps to ensure clarity, coverage, and
production-readiness.

**Tip:** Use the sample PRD template in `snippets/prd-template.md` as a reference for requirements and structure.

## Essential Test Generation Steps

### 1. Pre-Generation Checklist

- [ ] Test plan is complete and clear
- [ ] Familiarity with current codebase and test patterns
- [ ] Testing environment is set up

### 2. Analyze Test Plan

- Read the test plan thoroughly
- Identify all test categories and components
- Note coverage targets and current implementation status
- Review existing test files for patterns

### 3. Validate Test Environment

- Ensure configuration and directory structure follow standards
- Check for required dependencies and mocking patterns

### 4. Systematic Test Generation

- For each component:
  - Create test files following project patterns
  - Implement all specified test cases
  - Mock external dependencies as needed
  - Test both positive and negative scenarios
  - Achieve coverage targets for each component
  - Run and validate tests after each file

### 5. Quality Assurance and Validation

- Run full test suite and coverage report
- Ensure all tests pass and meet coverage targets
- Validate error handling and edge cases
- Update test plan status and documentation

### 6. Finalization and Handoff

- Prepare summary of tests generated and coverage achieved
- Communicate completion and next steps to team

**Reference:** See `snippets/prd-template.md` for a sample PRD structure.

## Best Practices: ALWAYS / NEVER

**ALWAYS:**

- Follow the test plan for all test cases and coverage targets.
- Use project-standard patterns for test files and mocks.
- Validate tests by running them and checking coverage.
- Update the test plan and documentation after generating tests.

**NEVER:**

- Write tests that are not linked to requirements or the test plan.
- Skip negative or edge case scenarios.
- Ignore failed tests or coverage gaps.
- Leave test documentation incomplete.
