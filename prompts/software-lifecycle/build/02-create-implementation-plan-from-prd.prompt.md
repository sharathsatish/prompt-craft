---
name: 'Create Implementation Plan from PRD'
author: 'Sharath Satish'
mode: 'agent'
tools: ['read_file', 'write_file', 'create_directory', 'move_file', 'replace_string_in_file', 'insert_edit_into_file', 'run_in_terminal', 'semantic_search', 'list_dir', 'get_errors']
description: 'Systematic prompt for creating and executing an implementation plan for any product or feature based on a Product Requirements Document (PRD).'
---

# Implement PRD Prompt

I'm an expert implementation engineer who will help you systematically implement Product Requirements Documents (PRDs) for any product or feature. This prompt follows proven, repeatable steps to ensure clarity, completeness, and production-readiness.

**Tip:** Use the sample PRD template in `snippets/prd-template.md` as a starting point for your PRD.

## Essential Implementation Steps

### 1. Pre-Implementation Checklist
- [ ] PRD document is complete and well-defined
- [ ] Implementation plan exists (create if missing)
- [ ] Familiarity with current codebase and architecture
- [ ] Testing environment is set up
- [ ] Documentation structure is understood

### 2. Create a Focused Implementation Plan
- Focus on MVP only—exclude future enhancements
- Break down into 7 clear implementation steps
- Include performance targets and success criteria
- Ensure backwards compatibility
- Use small, incremental changes and always test

**Prompt Template:**
```
I need to create a focused implementation plan for [PRD_NAME].

Requirements:
- Focus on MVP only
- 7 clear implementation steps
- Performance targets and success criteria
- Backwards compatibility
- Small, incremental changes; always test

Please:
1. Read [PRD_NAME]-prd.md to understand requirements
2. Check for existing implementation plan
3. Create or update [PRD_NAME]-implementation-plan.md
4. Rename any generic plan to match the PRD
```

### 3. Implement Core Data Structures
- Add new interfaces/types as needed
- Update configuration interfaces
- Follow naming conventions and add JSDoc comments
- Maintain backwards compatibility
- Build and test after changes

### 4. Implement Core Manager/Service Classes
- Create main manager/service classes
- Add error handling, logging, and validation
- Use dependency injection where appropriate
- Export modules via index files
- Build and test incrementally

### 5. Implement Supporting Components
- Add supporting classes (detectors, processors, etc.)
- Handle edge cases and optimize performance
- Export new classes in module index
- Build and test after each addition

### 6. Integrate with Main Application
- Identify integration points in main workflow
- Add imports and properties as needed
- Modify workflow methods for new feature
- Ensure backwards compatibility
- Add feature controls (flags, config options)
- Build and test after each integration

### 7. Update Configuration System
- Update configuration manager for new options
- Add sensible defaults and validation
- Ensure configuration is optional and backwards compatible
- Add configuration examples to documentation
- Build and test configuration loading/validation

### 8. Comprehensive Testing
- Create unit, integration, and configuration tests
- Test error handling and edge cases
- Achieve >90% code coverage for new components
- Mock external dependencies as needed
- Follow existing test patterns and structure
- Run tests frequently

### 9. Update Documentation
- Update README and feature documentation
- Mark PRD as implemented
- Update architecture and roadmap docs
- Add configuration and CLI examples
- Update completion status across all files

### 10. Success Criteria Validation
- All features work as specified in PRD
- Performance targets met
- Seamless integration with existing workflow
- >90% test coverage, all tests passing
- Documentation is current and complete
- No breaking changes
- Clear error handling and configuration

### 11. Final Steps
- Draft a comprehensive commit message
- Mark implementation plan and PRD as completed
- Update roadmap and next steps

**Reference:** See `snippets/prd-template.md` for a sample PRD structure.

## Best Practices: ALWAYS / NEVER

**ALWAYS:**
- Base the plan strictly on the PRD's MVP scope.
- Break work into small, incremental, testable steps.
- Include performance targets and success criteria for each step.
- Ensure backwards compatibility at every stage.

**NEVER:**
- Plan for features not included in the PRD's MVP.
- Skip testing or documentation steps.
- Assume implementation details without verifying with the codebase.
- Ignore configuration or integration requirements.
