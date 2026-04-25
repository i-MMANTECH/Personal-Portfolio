type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (Array.isArray(input)) {
      const merged = cn(...input);
      if (merged) out.push(merged);
      continue;
    }
    out.push(String(input));
  }
  return out.join(" ");
}
