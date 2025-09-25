import { z } from "zod";

export const mealSchema = z.object({
  dayOfWeek: z.enum(["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]),
  foodId: z.number().optional(),
  food: z.string().min(1, "Selecione um alimento"),
  description: z.string().optional(),
  quantity: z
    .number({
      required_error: "Informe a quantidade",
      invalid_type_error: "Quantidade deve ser um número",
    })
    .min(1, "Quantidade deve ser maior que 0"),
  time: z.string().regex(/^\d{2}:\d{2}$/, "Formato de hora inválido (hh:mm)"),
});

export type MealFormData = z.infer<typeof mealSchema>;
