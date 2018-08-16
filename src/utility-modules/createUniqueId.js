export default function(uniqueNumber, description) {
  const uniqueString = description
    .toLowerCase()
    .split(" ")
    .slice(0, 2)
    .join("-");
  return `${uniqueNumber}-${uniqueString}`;
}
