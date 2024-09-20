export const fetchApplications = async (
  pageParam = 0,
  searchId: string | undefined = undefined
) => {
  const res = await fetch(
    `/api/applications?pageParam=${pageParam}&searchId=${searchId || ""}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch applications");
  }

  return res.json();
};
