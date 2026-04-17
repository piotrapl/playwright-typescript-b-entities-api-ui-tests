Cross-layer Playwright testing combining **UI validation with API verification** to detect defects earlier and increase test reliability.

---

## Abstract (po polsku)

Projekt demonstracyjny automatyzacji testów wykorzystujący **Playwright + TypeScript** do testowania wyszukiwania numeru **REGON**.  
Testy realizują podejście **cross-layer testing**, w którym działania użytkownika w interfejsie są weryfikowane poprzez dane zwracane przez API.  
Pozwala to wykrywać błędy szybciej i zwiększać wiarygodność testów.  
Projekt zawiera również raportowanie **Allure** z artefaktami testowymi (screenshots, trace).

---
## Core Features and Implementation Details
• Playwright + TypeScript test framework for cross-layer (UI + API) validation  
• Tests real public business entities search system (gus.pl)  
• Implements **micro E2E pattern**: UI action → backend API → UI validation  

Senarios implemented:
• Scenario 1: non-existent REGON → API `{ d: "" }` + UI "Nie znaleziono podmiotu"  
• Scenario 2: non-existent NIP → API `{ d: "" }` + UI "Nie znaleziono podmiotu"  

• Uses **Playwright fixtures as Dependency Injection (DI)**  
• Clean separation: Tests → Flows → Pages → Assertions → Data  
• Flows layer encapsulates business logic  

• Page Objects handle:
  - UI actions (fill, click)
  - API interception (`waitForResponse`)
• Assertions validate both UI + API response consistency  

• Fully parallel execution using Playwright workers  
• Each test runs in isolated browser context (no shared state)  

• Typed API responses (TypeScript)  
• Data-driven testing (datasets contain REGON, NIP numbers - valid but with no entity relation)  

• Screenshots attached automatically after each test  
• Trace files available for debugging failures  

• Easily scalable → new identifiers (already scaled by adding new scenario for entity search by NIP number)

##  What can be improved
### 1. Unify REGON + NIP search logic
• Introduce a single search method (type: 'regon' | 'nip')
• Remove duplicated logic across flows/pages
Improves scalability and maintainability
### 2. Introduce shared SearchPage
• Replace multiple Page Objects with one reusable component
• Centralize selectors and actions for all identifiers
• Simplifies structure and future extensions
3. Strengthen TypeScript typing
• Use generic API types (ApiResponse<T>)
• Eliminate any and enforce strict typing
• Improves reliability and developer experience
4. Improve selector strategy
• Prefer getByRole, getByLabel over #id
• Make tests more resilient to UI changes
• Reduce flakiness and maintenance cost
5. Add positive test scenarios
• Cover valid REGON and NIP searches
• Verify full UI + API data consistency
• Increase real-world test coverage
6. Extend reporting (Allure)
• Add steps, API data, and attachments
• Improve debugging and traceability
• Stronger presentation in portfolio
7. Add API-only test layer
• Test backend independently of UI