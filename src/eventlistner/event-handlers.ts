import { SuiEvent } from '@mysten/sui/client';
import { Prisma } from '@prisma/client';
import { databaseService } from './db';

type Event = CalculateEvent;

type CalculateEvent = {
  id: string;
  message: string;
  num1: number;
  num2: number;
  answer: number;
};

export const handleCalcObjects = async (events: SuiEvent[], type: string) => {
  const updates: Record<string, Prisma.CalcCreateInput> = {};
  for (const event of events) {
    console.log(type);
    console.log(event);
    if (!event.type.startsWith(type))
      throw new Error('Invalid event module origin');
    const data = event.parsedJson as Event;
    if (!Object.prototype.hasOwnProperty.call(updates, data.id)) {
      updates[data.id] = {
        objectId: data.id,
        type: data.message,
        num1: Number(data.num1),
        num2: Number(data.num2),
        ans: Number(data.answer),
      };
    }
  }

  // Assign a value to databaseService
  const promises = Object.values(updates).map((update) =>
    databaseService.calc.create({
      data: update,
    }),
  );
  await Promise.all(promises);
};
