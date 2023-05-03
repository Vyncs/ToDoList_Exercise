import { ClipboardText } from "phosphor-react";
import { ContainerAnyTask, QuantityAnyTask } from "./styles";

export function AnyTask() {
  return (
    <>
    <ContainerAnyTask>
    <ClipboardText size={70} color='#808080' weight="thin" />
      <QuantityAnyTask variant="bold">
        Você ainda não tem tarefas cadastradas
      </QuantityAnyTask>
      <QuantityAnyTask>Crie tarefas e organize seus itens a fazer</QuantityAnyTask>
    </ContainerAnyTask>
    </>
  );
}
