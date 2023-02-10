import React from "react";
import { useCallback, useEffect } from "react";
import propTypes from "prop-types";
import Link from "next/link";
import { Col, Row, Menu, Button } from "antd";
import styled from 'styled-components';

const IndexLayout = ({ children }) => {

  return (
    <Row style={{ width: "1100px", margin: "0 auto" }}>
      <Col span={4}></Col>
      <Col span={16} style={{ background: "teal" }}>
        <upBar style={{ color: "white", fontWeight: "bold" }}>sehwan's portfolio</upBar>
      </Col>
      <Col span={4}></Col>

      <Col span={4}></Col>
      <Col span={4} defaultChecked>
        <Menu mode="inline" style={{ alignItems: "center" }}>
          <Menu.Item>
            <Link href="/">자기소개</Link>
          </Menu.Item>
          <Menu.Item key="resume">
            <Link href="/resume">이력서</Link>
          </Menu.Item>
          <Menu.Item key="comment">
            <Link href="/comment">코멘트</Link>
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={12}>{children}</Col>
      <Col span={4}></Col>
    </Row>
  );
};

IndexLayout.propTypes = {
  children: propTypes.node.isRequired,
};

export default IndexLayout;
