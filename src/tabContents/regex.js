const regex = () => {
    return (
        <ul>
            <li>
                <strong>Literal Characters:</strong> <code>{`/abc/`}</code> matches "abc"
            </li>
            <li>
                <strong>Wildcard (dot):</strong> <code>{`/a.c/`}</code> matches "abc", "a1c", but not "ac"
            </li>
            <li>
                <strong>Character Set:</strong> <code>{`/[abc]/`}</code> matches "a", "b", or "c"
            </li>
            <li>
                <strong>Negated Character Set:</strong> <code>{`/[^abc]/`}</code> matches any character except "a", "b", or "c"
            </li>
            <li>
                <strong>Range:</strong> <code>{`/[a-z]/`}</code> matches any lowercase letter
            </li>
            <li>
                <strong>Digit:</strong> <code>{`/\\d/`}</code> matches any digit (equivalent to {`/[0-9]/`})
            </li>
            <li>
                <strong>Non-digit:</strong> <code>{`/\\D/`}</code> matches any non-digit character
            </li>
            <li>
                <strong>Whitespace:</strong> <code>{`/\\s/`}</code> matches any whitespace character (spaces, tabs, newlines)
            </li>
            <li>
                <strong>Non-whitespace:</strong> <code>{`/\\S/`}</code> matches any non-whitespace character
            </li>
            <li>
                <strong>Word Character:</strong> <code>{`/\\w/`}</code> matches any word character (letters, digits, or underscore)
            </li>
            <li>
                <strong>Non-word Character:</strong> <code>{`/\\W/`}</code> matches any non-word character
            </li>
            <li>
                <strong>Anchors - Start of string:</strong> <code>{`/^abc/`}</code> matches "abc" at the beginning of a string
            </li>
            <li>
                <strong>Anchors - End of string:</strong> <code>{`/abc$/`}</code> matches "abc" at the end of a string
            </li>
            <li>
                <strong>Zero or more:</strong> <code>{`/a*/`}</code> matches "a" repeated 0 or more times
            </li>
            <li>
                <strong>One or more:</strong> <code>{`/a+/`}</code> matches "a" repeated 1 or more times
            </li>
            <li>
                <strong>Zero or one:</strong> <code>{`/a?/`}</code> matches 0 or 1 occurrences of "a"
            </li>
            <li>
                <strong>Exactly N:</strong> <code>{`/a{3}/`}</code> matches exactly 3 "a"s
            </li>
            <li>
                <strong>At least N:</strong> <code>{`/a{3,}/`}</code> matches 3 or more "a"s
            </li>
            <li>
                <strong>Between N and M:</strong> <code>{`/a{3,5}/`}</code> matches 3 to 5 "a"s
            </li>
            <li>
                <strong>OR:</strong> <code>{`/a|b/`}</code> matches "a" or "b"
            </li>
            <li>
                <strong>Group:</strong> <code>{`/(abc)/`}</code> matches "abc" as a group
            </li>
            <li>
                <strong>Non-capturing Group:</strong> <code>{`/(?:abc)/`}</code> matches "abc" without capturing
            </li>
            <li>
                <strong>Lookahead (positive):</strong> <code>{`/a(?=b)/`}</code> matches "a" only if followed by "b"
            </li>
            <li>
                <strong>Lookahead (negative):</strong> <code>{`/a(?!b)/`}</code> matches "a" only if NOT followed by "b"
            </li>
            <li>
                <strong>Lookbehind (positive):</strong> <code>{`/(?<=b)a/`}</code> matches "a" only if preceded by "b"
            </li>
            <li>
                <strong>Lookbehind (negative):</strong> <code>{`/(?<!b)a/`}</code> matches "a" only if NOT preceded by "b"
            </li>
            <li>
                <strong>Escape Special Characters:</strong> <code>{`/\\./`}</code> matches a literal dot "."
            </li>
            <li>
                <strong>Boundary (Word):</strong> <code>{`/\\bword\\b/`}</code> matches "word" as a whole word
            </li>
            <li>
                <strong>Non-boundary:</strong> <code>{`/\\Bword\\B/`}</code> matches "word" within a larger string
            </li>
            <li>
                <strong>Match any of:</strong> <code>{`/[abc]/`}</code> matches any one of "a", "b", or "c"
            </li>
            <li>
                <strong>Ignore case:</strong> <code>{`/abc/i`}</code> matches "abc" case-insensitively
            </li>
            <li>
                <strong>Global match:</strong> <code>{`/abc/g`}</code> finds all matches rather than stopping after the first
            </li>
            <li>
                <strong>Multiline:</strong> <code>{`/^abc/m`}</code> makes <code>^</code> match at the start of each line
            </li>
            <li>
                <strong>Dotall (Single-line mode):</strong> <code>{`/abc/s`}</code> makes the dot <code>.</code> match newline characters as well
            </li>
            <li>
                <strong>Unicode Support:</strong> <code>{`/\\u{1F600}/u`}</code> matches Unicode code points like emoji
            </li>
            <li>
                <strong>Hexadecimal Character:</strong> <code>{`/\\x41/`}</code> matches the character represented by hexadecimal value 41 (i.e., "A")
            </li>
            <li>
                <strong>Octal Character:</strong> <code>{`/\\101/`}</code> matches the character represented by octal value 101 (i.e., "A")
            </li>
            <li>
                <strong>Named Groups:</strong> <code>{`/(?<name>abc)/`}</code> defines a named capture group "name"
            </li>
            <li>
                <strong>Backreference:</strong> <code>{`/(abc)\\1/`}</code> matches "abcabc" (repeats the captured group)
            </li>
            <li>
                <strong>Named Backreference:</strong> <code>{`/(?<name>abc)\\k<name>/`}</code> refers to a named capture group
            </li>
            <li>
                <strong>Atomic Grouping:</strong> <code>{`/(?>abc)/`}</code> matches "abc" as an atomic group (no backtracking allowed)
            </li>
            <li>
                <strong>Non-greedy Match:</strong> <code>{`/a*?/`}</code> matches as few "a"s as possible
            </li>
            <li>
                <strong>Greedy Match:</strong> <code>{`/a*/`}</code> matches as many "a"s as possible
            </li>
            <li>
                <strong>Alternation:</strong> <code>{`/a|b|c/`}</code> matches "a", "b", or "c"
            </li>
            <li>
                <strong>End of Line:</strong> <code>{`/$/`}</code> asserts position at the end of a line
            </li>
            <li>
                <strong>Case-insensitive Flag:</strong> <code>{`/abc/i`}</code> allows case-insensitive matching
            </li>
            <li>
                <strong>All Characters Except Newline:</strong> <code>{`/./`}</code> matches any character except newline
            </li>
            <li>
                <strong>Newline Character:</strong> <code>{`/\\n/`}</code> matches a newline character
            </li>
            <li>
                <strong>Tab Character:</strong> <code>{`/\\t/`}</code> matches a tab character
            </li>
            <li>
                <strong>Carriage Return:</strong> <code>{`/\\r/`}</code> matches a carriage return character
            </li>
            <li>
                <strong>Form Feed:</strong> <code>{`/\\f/`}</code> matches a form feed character
            </li>
            <li>
                <strong>Backspace:</strong> <code>{`/[\\b]/`}</code> matches a backspace character inside a character set
            </li>
            <li>
                <strong>Escape Literal Backslash:</strong> <code>{`/\\\\/`}</code> matches a literal backslash
            </li>
            <li>
                <strong>Comment:</strong> <code>{`/(?#comment)/`}</code> includes a comment within a regex
            </li>
            <li>
                <strong>Match Non-ASCII:</strong> <code>{`/\\p{L}/u`}</code> matches any Unicode letter character
            </li>
            <li>
                <strong>Unicode Property Escapes:</strong> <code>{`/\\p{Script=Latin}/u`}</code> matches characters in the Latin script
            </li>
            <li>
                <strong>Backtracking Control:</strong> <code>{`/a*+b/`}</code> uses possessive quantifiers to prevent backtracking
            </li>
            <li>
                <strong>Reset Start Point:</strong> <code>{`/\\K/`}</code> resets the starting point of the reported match
            </li>
        </ul>
    );
};

export default regex;
