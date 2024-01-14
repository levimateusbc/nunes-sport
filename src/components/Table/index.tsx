import { Col, Empty, Row, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Nome",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Descrição",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Valor",
    key: "value",
    dataIndex: "value",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [];

export default function CustomTable() {
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
