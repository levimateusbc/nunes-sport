import { Col, Empty, Row, Space, Table } from "antd";
import type { TableProps } from "antd";
import { CustomTableProps, DataType } from "./interface";


const columns: TableProps<DataType>["columns"] = [
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Descrição",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Valor",
    key: "price",
    dataIndex: "value",
  },
  {
    title: "Ação",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Editar</a>
        <a>Deletar</a>
      </Space>
    ),
  },
];

export default function CustomTable({data}: CustomTableProps) {
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        {/* Conteúdo para telas pequenas (xs), médias (sm), grandes (md e lg), e muito grandes (xl) */}
        <Table
          columns={columns}
          dataSource={data}
          locale={{
            emptyText: (
              <Empty
                description="Não há produtos cadastrados."
                image={Empty.PRESENTED_IMAGE_DEFAULT}
              />
            ),
          }}
        />
      </Col>
    </Row>
  );
}
