export async function submitForm(formData) {
  const data = await fetch("/api/feedback", {
    method: "POST",
    body: JSON.stringify(formData),
  });
  return data.json();
}
