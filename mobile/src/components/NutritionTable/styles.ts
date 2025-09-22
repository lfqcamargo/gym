import { createThemedStyles } from "@/theme/global";

export const styles = createThemedStyles((theme) => ({
  tableContainer: {
    padding: 16,
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 16,
  },

  tableTitle: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
    color: "#333",
  },

  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 4,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },

  tableCellLabel: {
    fontSize: 14,
    color: "#555",
  },

  tableCellValue: {
    fontSize: 14,
    fontWeight: "700",
    color: "#333",
  },
}));
