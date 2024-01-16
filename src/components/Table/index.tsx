import { Col, Empty, Row, Space, Table } from "antd";
import type { TableProps } from "antd";
import { CustomTableProps, DataType } from "./interface";
import { useEffect, useState } from "react";
import { useScreenSize } from "../../Utils";

export default function CustomTable({ data }: CustomTableProps) {
  const screenSize = useScreenSize();
  const [newColumns, setNewColumns] = useState([{}]);

  useEffect(() => {
    if (screenSize === "mobile") {
      const columns: TableProps<DataType>["columns"] = [
      
        {
          title: "Nome",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Valor",
          key: "price",
          dataIndex: "price",
        },
        {
          width: 50,
          title: "Ação",
          key: "action",
          render: (_, record) => (
            <Space size="small">
              <a>Editar</a>
              <a>Deletar</a>
            </Space>
          ),
        },
      ];
      setNewColumns(columns);
    } else {
      const columns: TableProps<DataType>["columns"] = [
        {
          title: "Código",
          key: "productCode",
          dataIndex: "productCode",
        },
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
          dataIndex: "price",
        },
        {
          width: 50,
          title: "Ação",
          key: "action",
          render: (_, record) => (
            <Space size="small">
              <a>Editar</a>
              <a>Deletar</a>
            </Space>
          ),
        },
      ];
      setNewColumns(columns);
    }
  }, [screenSize]);
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Table
          columns={newColumns}
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
