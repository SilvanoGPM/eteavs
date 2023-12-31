import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDateExtended(date: string): string {
  return format(new Date(date), "dd 'de' MMMM, yyyy", {
    locale: ptBR,
  });
}
