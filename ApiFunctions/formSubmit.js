const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
export async function submitForm(formData) {
  const data = await fetch("/api/feedback", {
    method: "POST",
    body: JSON.stringify(formData),
  });
  return data.json();
}

export async function getComments() {
  try {
    const res = await fetch(`${BASE_URL}/api/feedback`);

    if (!res.ok) throw new Error("Error fetching comments");

    const data = await res.json();
    return data;
  } catch (e) {
    console.error("Error fetching comments", e);
    return null;
  }
}
