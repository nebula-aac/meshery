module.exports = {
    // ...
    // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
    src: "./features",
    language: "javascript", // "javascript" | "typescript" | "flow"
    schema: "../server/internal/graphql/schema/schema.graphql",
    exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
}