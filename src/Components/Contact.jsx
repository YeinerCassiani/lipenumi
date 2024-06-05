import React from "react";
import { Form, Input, Button } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  MessageOutlined,
} from "@ant-design/icons";

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    form.resetFields();
    console.log("Datos enviados: ", values);
    alert("Datos enviados");
  };

  return (
    <>
    <h2 className="contact-title">Contáctenos</h2>
      <Form
        form={form}
        name="contact_form"
        layout="vertical"
        onFinish={onFinish}
        className="contact-form"
      >
        <Form.Item
          name="name"
          label="Nombre"
          rules={[{ required: true, message: "Por favor ingrese su nombre!" }]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Nombre"
            className="custom-input"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label="Correo Electrónico"
          rules={[
            {
              required: true,
              message: "Por favor ingrese su correo electrónico!",
            },
            {
              type: "email",
              message: "Por favor ingrese un correo electrónico válido!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined />}
            placeholder="Correo Electrónico"
            className="custom-input"
          />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Teléfono"
          rules={[
            {
              required: true,
              message: "Por favor ingrese su número de teléfono!",
            },
          ]}
        >
          <Input
            prefix={<PhoneOutlined />}
            placeholder="Teléfono"
            className="custom-input"
          />
        </Form.Item>

        <Form.Item
          name="message"
          label="Mensaje"
          rules={[{ required: true, message: "Por favor ingrese su mensaje!" }]}
        >
          <Input.TextArea
            prefix={<MessageOutlined />}
            placeholder="Mensaje"
            rows={4}
            className="custom-input"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="submit-button">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Contact;
