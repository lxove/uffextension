## About
Simple chrome extension to attempt replacing occurances of __Ulf Kristersson__ or __Kristersson__ with __Uffe__. Checks the assumably most frequently used elements in news articles for the occurances, leaving out nodes such as div, span, button etc.

### Known limitations
* Occurrances of __Ulf Kristersson__ or __Kristersson__ in elements that are not included in the ones checked will still have their original text
* The substitution of __Kristersson__ -> __Uffe__ might give some unwanted effects if other people are referred to as __Kristersson__. For example, a person called __Peter Kristersson__ will be displayed as __Peter Uffe__.
