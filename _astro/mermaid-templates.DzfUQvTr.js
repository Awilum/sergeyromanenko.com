var e=[{id:`flowchart`,label:`Flowchart`,source:`flowchart TD
    A[Open the tool] --> B{Is the diagram right?}
    B -- Yes --> C[Download PNG]
    B -- No --> D[Edit the Mermaid source]
    D --> A
    C --> E[Done]
`},{id:`sequence`,label:`Sequence diagram`,source:`sequenceDiagram
    participant Browser
    participant Mermaid
    Browser->>Mermaid: mermaid.render(id, source)
    alt The source parses
        Mermaid-->>Browser: an SVG element
    else The source does not parse
        Mermaid-->>Browser: an error with the line number
    end
    Note over Browser,Mermaid: Nothing leaves the page
`},{id:`class`,label:`Class diagram`,source:`classDiagram
    class Diagram {
        +String id
        +String source
        +render() Diagram
        +exportPng() Blob
    }
    class Editor {
        +String source
        +onInput()
    }
    Editor --> Diagram : source
`},{id:`er`,label:`Entity relationship`,source:`erDiagram
    DIAGRAM ||--o{ SOURCE : is written as
    DIAGRAM ||--o{ EXPORT : produces
    DIAGRAM {
        string id
        string source
        string diagramType
    }
    SOURCE {
        string text
    }
    EXPORT {
        string filename
        string format
    }
`},{id:`gantt`,label:`Gantt chart`,source:`gantt
    title One diagram, from edit to export
    dateFormat YYYY-MM-DD
    section Write
        Draft the first version     :a1, 2026-01-05, 3d
        Check the preview           :after a1, 1d
    section Refine
        Apply a template            :a2, after a1, 2d
        Fix the labels              :after a2, 2d
    section Export
        Download PNG                :a3, after a2, 1d
`},{id:`state`,label:`State diagram`,source:`stateDiagram-v2
    [*] --> Editing
    Editing --> Rendering : source changed
    Rendering --> Editing : render failed
    Rendering --> Ready : render succeeded
    Ready --> [*]
`}],t=e[0].id;function n(t){return e.find(e=>e.id===t)}export{e as n,n as r,t};