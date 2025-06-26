# Examples Quick Reference

*Guide to creating high-quality examples that teach transferable patterns*

## Core Principles

### Quality Over Quantity

**Effective Examples:**

- Demonstrate the exact pattern or technique
- Include enough context to be self-contained
- Show both input and expected output
- Highlight key decision points and rationale

**Example Structure:**

```markdown
### Example: [Clear Description]

**Context:** [Situation and requirements]
**Input:** [What goes in]
**Process:** [Key steps or considerations]
**Output:** [Expected result]
**Why This Works:** [Teaching moment]
```

### Progressive Complexity

**Start Simple:**

```markdown
### Basic Email Validation

**Input:** "user@domain.com"
**Pattern:** Simple regex for standard format
**Output:** Valid ✓
```

**Add Complexity:**

```markdown
### Advanced Email Validation

**Input:** "user.name+tag@subdomain.domain.co.uk"
**Pattern:** Comprehensive regex handling subdomains, plus-addressing
**Output:** Valid ✓
**Edge Cases Handled:** International domains, special characters
```

## Example Categories

### Before/After Examples

**Purpose:** Show transformation clearly

```markdown
### Document Structure Improvement

**Before:**

```text

Important Information About Our New Policy Changes
We are making some changes. These changes affect everyone.
The changes start next month. Please read carefully.

```

**After:**

```text

# Policy Update: Effective March 1, 2024

## What's Changing

- [Specific change 1]
- [Specific change 2]

## Who's Affected

All team members in departments A, B, and C

## Next Steps

- Review changes by February 15
- Attend training session (optional)
- Contact HR with questions

```

**Improvements Made:**

- Clear hierarchy with headings
- Specific dates and details
- Actionable next steps
- Scannable format

```text
```

### Input/Output Examples

**Purpose:** Demonstrate exact transformations

```markdown
### Data Processing Example

**Input CSV:**

```csv

name,department,salary
John Doe,Engineering,75000
Jane Smith,Marketing,65000

```

**Transformation Request:**
"Calculate department averages and format for executive summary"

**Output:**

```text

## Salary Analysis Summary

- Engineering: $75,000 average (1 employee)
- Marketing: $65,000 average (1 employee)
- Overall Average: $70,000

```

**Key Processing Steps:**

1. Parse CSV data
2. Group by department
3. Calculate averages
4. Format for readability

```text
```

### Error/Correction Examples

**Purpose:** Show how to handle problems

```markdown
### Common Formatting Error

**Problematic Input:**
"Please FIX this DOCUMENT it has TOO many capitals and bad formatting!!!!"

**Correction Process:**
1. Normalize capitalization
2. Remove excessive punctuation
3. Structure as clear request

**Corrected Output:**
"Please improve this document's formatting and capitalization for professional presentation."

**Learning Point:** Always model the quality you want to receive
```

## Domain-Specific Examples

### Technical Documentation

```markdown
### API Documentation Example

**Context:** REST endpoint documentation

**Before (Inadequate):**

```text
GET /users
Returns users
```

**After (Complete):**

```text
```

### GET /users

Retrieve a paginated list of all users in the system.

**Parameters:**

- `page` (optional): Page number, default 1
- `limit` (optional): Items per page, default 10, max 100

**Response:**

```json
{
  "users": [
    {"id": 1, "name": "John Doe", "email": "john@example.com"}
  ],
  "pagination": {
    "page": 1, "limit": 10, "total": 25, "pages": 3
  }
}
```

**Error Responses:**

- 400: Invalid parameters
- 401: Authentication required
- 429: Rate limit exceeded

```text
```

**Why This Works:**

- Complete parameter documentation
- Real example response
- Error handling coverage
- Consistent formatting

```text
**Why This Works:**

- Complete parameter documentation
- Real example response
- Error handling coverage
- Consistent formatting
```

### Content Creation

```markdown
### Blog Post Introduction Example

**Context:** Technical blog for developers

**Weak Opening:**
"This post is about microservices. They are good for some things."

**Strong Opening:**
"Last month, our team reduced deployment time from 2 hours to 15 minutes by 
switching to microservices. Here's exactly how we did it, what challenges 
we faced, and whether it's right for your team."

**Why This Works:**
- Specific, measurable benefit
- Promises practical value
- Acknowledges trade-offs
- Personal experience
```

### Business Communication

```markdown
### Status Update Example

**Context:** Weekly team update email

**Vague Version:**
"Working on several projects. Some challenges but making progress."

**Specific Version:**
```

## This Week's Accomplishments

- Completed user authentication module (3 days ahead of schedule)
- Resolved database performance issue affecting 200+ users

## Next Week's Focus

- Begin integration testing for payment system
- Conduct code review sessions on Tuesday/Thursday

## Blockers & Support Needed

- Waiting on API keys from external vendor (escalated to procurement)
- Need UI/UX review for checkout flow by Friday

```text
```text
**Teaching Points:**

- Specific achievements with context
- Clear priorities for upcoming work
- Proactive communication about obstacles
```

## Quality Indicators

### High-Quality Examples Include

**Context Setting:**

- Who is the intended user
- What situation or need prompted this
- What constraints or requirements exist

**Complete Information:**

- All necessary inputs provided
- Clear step-by-step process
- Expected outputs defined
- Success criteria specified

**Educational Value:**

- Explains why certain choices were made
- Highlights common pitfalls to avoid
- Connects to broader principles
- Enables reader to adapt to similar situations

### Examples to Avoid

**Too Generic:**

```markdown
"Here's how to write good content:
- Make it clear
- Make it useful
- Make it engaging"
```

**Too Specific (Not Transferable):**

```markdown
"Click the blue button in the top-right corner of version 2.3.1 
of our internal tool to export the Q3 sales data"
```

**Missing Context:**

```markdown
"Output: Successfully processed 1,847 records"
*[No indication of what was processed, how, or why]*
```

## Example Validation Checklist

### Completeness Check

- [ ] **Context**: Clear situation and requirements
- [ ] **Input**: All necessary starting information
- [ ] **Process**: Key steps or decision points
- [ ] **Output**: Expected result with quality indicators
- [ ] **Learning**: Why this approach works

### Accuracy Check

- [ ] **Technical Correctness**: All details are accurate
- [ ] **Best Practices**: Follows established standards
- [ ] **Error-Free**: No typos, formatting issues, or inconsistencies
- [ ] **Current**: Uses up-to-date tools, techniques, and references

### Educational Check

- [ ] **Transferable**: Principles apply to similar situations
- [ ] **Progressive**: Builds on previous knowledge appropriately
- [ ] **Practical**: Can be immediately applied by intended audience
- [ ] **Clear Value**: Obvious benefit and improvement demonstrated

### Relevance Check

- [ ] **Audience-Appropriate**: Matches skill level and needs
- [ ] **Use Case Alignment**: Addresses real-world scenarios
- [ ] **Scale-Appropriate**: Works for intended implementation level
- [ ] **Context-Sensitive**: Considers specific constraints and requirements

## Creating Example Collections

### Individual Learning

**Focus:** Personal skill development and immediate application

```markdown
## Personal Productivity Examples
- Email template for client communication
- Meeting notes structure for project planning
- Code review checklist for quality assurance
```

### Team Standardization

**Focus:** Consistent practices and collaborative efficiency

```markdown
## Team Communication Standards
- Sprint retrospective format
- Bug report template with severity levels
- Code documentation examples by language
```

### Organizational Scaling

**Focus:** Enterprise adoption and governance

```markdown
## Enterprise Template Library
- Brand-compliant presentation formats
- Legal-reviewed contract language patterns
- Compliance-approved data handling procedures
```

---

*Great examples teach principles, not just procedures. Invest in examples that help others think, not just copy.*
