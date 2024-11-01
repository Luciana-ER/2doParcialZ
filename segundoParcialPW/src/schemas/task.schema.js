import { z } from "zod";

export const createTaskSchema = z.object({
  title: z.string({
    required_error: "El título es obligatorio",
  }),
  description: z.string().optional(),
  status: z.enum(["pendiente", "en progreso", "completada"], {
    required_error: "El estado es obligatorio y debe ser 'pendiente', 'en progreso' o 'completada'",
  }),
  priority: z.number().int().min(1).max(5).optional(),
  date: z.string().datetime().optional(),
});
