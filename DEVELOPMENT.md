# Prompt-Craft Development Guide

## Overview

This repository includes a complete development environment setup with npm package configuration,
automated validation, and Continuous Integration (CI) support for the CREATE Framework and Quality Pyramid
methodology.

## Package Components

### 📦 Core Files

- `package.json` - NPM package configuration with scripts and dependencies
- `package-lock.json` - Dependency lock file (auto-generated)
- `.npmrc` - NPM configuration for strict dependency management
- `.markdown-link-check.json` - Configuration for link validation

### 🛠 GitHub Scripts

- `.github/scripts/validate.js` - Comprehensive validation script for CI and local development

### 🧪 Available NPM Scripts

```bash
# Install dependencies
npm install
# or
npm run setup

# Run comprehensive validation (recommended)
npm test
# or 
npm run validate

# Run only markdown linting
npm run lint

# Fix markdown linting issues automatically
npm run lint:fix

# Run only lint validation (faster for development)
npm run validate:lint

# For CI environments
npm run ci
```

## Dependencies

### Development Dependencies

- **markdownlint-cli2** (v0.13.0) - Markdown linting and formatting validation
- **markdown-link-check** (v3.12.2) - Link validation for markdown files

## Validation Features

### 📝 Markdown Linting

- Enforces consistent markdown formatting across all documentation
- Configurable rules via `.markdownlint.json`
- Automatic fixing available with `npm run lint:fix`

### 🏗️ Repository Structure Validation

Validates presence of required directories:

- `methodology/` - Framework documentation
- `prompts/` - Ready-to-use CREATE Framework patterns
- `guides/` - Implementation guidance and quick reference materials  
- `examples/` - Real-world application workflows
- `learning-resources/` - Learning pathways and training materials

### 🎯 CREATE Framework Compliance

- Validates prompt templates follow CREATE structure
- Checks for required sections: Character, Request, Examples, Adjustments, Type
- Reports missing elements for systematic improvement

### 🏗️ Quality Pyramid Assessment

- Validates educational content includes learning objectives
- Checks for practical examples and demonstrations
- Ensures systematic methodology application

## CI Integration

### GitHub Actions

The existing `.github/workflows/ci.yml` integrates with this npm setup:

1. **Markdown Linting** - Validates all markdown files
2. **Content Quality** - Checks CREATE Framework compliance
3. **Link Validation** - Verifies all links work correctly
4. **Structure Validation** - Ensures repository organization
5. **Template Validation** - Validates prompt templates

### Local Development

Run validation before committing:

```bash
npm test
```

This ensures your changes meet quality standards before pushing to CI.

## Configuration Files

### `.markdownlint.json`

- Configured for 120 character line length
- Allows specific HTML elements for documentation
- Balances strictness with practical documentation needs

### `.markdown-link-check.json`

- Ignores localhost and file:// links  
- Includes retry logic for temporary failures
- Configured for GitHub repository structure

### `.npmrc`

- Enforces engine version requirements
- Uses exact version matching for reproducible builds
- Enables audit-level checking for security

## Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run validation:**

   ```bash
   npm test
   ```

3. **Fix markdown issues:**

   ```bash
   npm run lint:fix
   ```

4. **Re-run validation:**

   ```bash
   npm test
   ```

## Understanding Validation Results

### ✅ Success Cases

- All validations pass
- Repository follows systematic methodology
- Ready for production use

### ⚠️ Warning Cases (Normal for Development)

- Some markdown linting issues (style/formatting)
- Missing CREATE Framework sections in some templates
- These are improvement opportunities, not blockers

### ❌ Failure Cases (Need Attention)

- Missing required repository structure
- Broken links in documentation
- Critical CREATE Framework compliance issues

## Benefits for Prompt-Craft

### 🎯 Systematic Quality Assurance

- Automated validation of CREATE Framework principles
- Consistent Quality Pyramid application
- Systematic improvement feedback

### 🏗️ Enterprise Readiness

- Professional CI/CD setup
- Reproducible development environment
- Industry-standard tooling integration

### 🔄 Continuous Improvement

- Automated quality feedback
- Systematic methodology enforcement
- Scalable quality standards

## Integration with Methodology

This npm setup directly supports the prompt-craft methodology:

- **CREATE Framework**: Validates template structure and compliance
- **Quality Pyramid**: Ensures completeness, accuracy, relevance, and efficiency
- **Systematic Development**: Provides automated quality assurance
- **Enterprise Scaling**: Professional tooling for organizational adoption

---

*This npm setup transforms prompt-craft from a documentation repository into a systematic,
enterprise-ready methodology framework with automated quality assurance.*
