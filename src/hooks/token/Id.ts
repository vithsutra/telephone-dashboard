
export  function getId() {
  const id = localStorage.getItem("admin_id");
  return id;
}

export function setId(id: string) {
  localStorage.setItem("admin_id", id);
} 