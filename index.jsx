import React from "react";
import contentList from "./content.js"

export default function DataInsert() {
   
    const [loading, setLoading] = React.useState(false);
    const [message, setMessage] = React.useState("");

    const handleBulkInsert = async () => {
        setLoading(true);
        setMessage("");
    
        try {
      // Send all content items one-by-one to the backend
      for (const item of contentList) {
        const response = await fetch("http://localhost:8000/api/embed", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ input: item.content }), // 👈 Only send .content
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Unknown error");
        }
      }

        setMessage("✅ All embeddings stored successfully!");
        } catch (err) {
        setMessage(`❌ Error: ${err.message}`);
        } finally {
        setLoading(false);
        }
    };

    return(
        <>
            <div style={{ maxWidth: "500px", margin: "auto", padding: "1rem" }}>
                <h2>Upload All Movie Embeddings</h2>
                <p>Total movies: {contentList.length}</p>
                <button onClick={handleBulkInsert} disabled={loading}>
                 {loading ? "Inserting..." : "Insert All"}
                </button>
                {message && (
                <p
                    style={{
                    marginTop: "0.5rem",
                    color: message.startsWith("✅") ? "green" : "red",
                }}
                >
                {message}
                </p>
                )}
            </div>
        </>
    )
}