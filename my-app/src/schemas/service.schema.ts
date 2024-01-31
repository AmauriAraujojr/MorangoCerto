import { z } from "zod";

export const ServiceSchema = z.object({
  id: z.number(),
  turnOn: z.string(),
  turnOff: z.string(),
  active: z.boolean(),
});

export type ServiceData=z.infer<typeof ServiceSchema>