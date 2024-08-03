import { Table } from "../../../../components/UI/organisms/Table";
import { StudentPaymentType } from "./type";

export const StudentPayment = () => {
  return (
    <Table<StudentPaymentType>
      data={[]}
      columns={[
        {
          header: "Janeiro",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ january }) => january.value,
            },
            {
              header: "Juros",
              accessorFn: ({ january }) => january.interest,
            },
          ],
        },
        {
          header: "Fevereiro",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ february }) => february.value,
            },
            {
              header: "Juros",
              accessorFn: ({ february }) => february.interest,
            },
          ],
        },
        {
          header: "Março",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ march }) => march.value,
            },
            {
              header: "Juros",
              accessorFn: ({ march }) => march.interest,
            },
          ],
        },
        {
          header: "1º Trimestre",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ firstQuarter }) => firstQuarter.value,
            },
            {
              header: "Juros",
              accessorFn: ({ firstQuarter }) => firstQuarter.interest,
            },
          ],
        },
        {
          header: "Abril",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ april }) => april.value,
            },
            {
              header: "Juros",
              accessorFn: ({ april }) => april.interest,
            },
          ],
        },
        {
          header: "Maio",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ may }) => may.value,
            },
            {
              header: "Juros",
              accessorFn: ({ may }) => may.interest,
            },
          ],
        },
        {
          header: "Junho",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ june }) => june.value,
            },
            {
              header: "Juros",
              accessorFn: ({ june }) => june.interest,
            },
          ],
        },
        {
          header: "2º Trimestre",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ secondQuarter }) => secondQuarter.value,
            },
            {
              header: "Juros",
              accessorFn: ({ secondQuarter }) => secondQuarter.interest,
            },
          ],
        },
        {
          header: "Julho",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ july }) => july.value,
            },
            {
              header: "Juros",
              accessorFn: ({ july }) => july.interest,
            },
          ],
        },
        {
          header: "Agosto",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ august }) => august.value,
            },
            {
              header: "Juros",
              accessorFn: ({ august }) => august.interest,
            },
          ],
        },
        {
          header: "Setembro",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ september }) => september.value,
            },
            {
              header: "Juros",
              accessorFn: ({ september }) => september.interest,
            },
          ],
        },
        {
          header: "3º Trimestre",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ thirtQuarter }) => thirtQuarter.value,
            },
            {
              header: "Juros",
              accessorFn: ({ thirtQuarter }) => thirtQuarter.interest,
            },
          ],
        },
        {
          header: "Outubro",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ october }) => october.value,
            },
            {
              header: "Juros",
              accessorFn: ({ october }) => october.interest,
            },
          ],
        },
        {
          header: "Novembro",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ november }) => november.value,
            },
            {
              header: "Juros",
              accessorFn: ({ november }) => november.interest,
            },
          ],
        },
        {
          header: "Dezembro",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ december }) => december.value,
            },
            {
              header: "Juros",
              accessorFn: ({ december }) => december.interest,
            },
          ],
        },
        {
          header: "4º Trimestre",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ fourthQuarter }) => fourthQuarter.value,
            },
            {
              header: "Juros",
              accessorFn: ({ fourthQuarter }) => fourthQuarter.interest,
            },
          ],
        },
        {
          header: "Total",
          columns: [
            {
              header: "Valor",
              accessorFn: ({ total }) => total.value,
            },
            {
              header: "Juros",
              accessorFn: ({ total }) => total.interest,
            },
          ],
        },
      ]}
    />
  );
};
