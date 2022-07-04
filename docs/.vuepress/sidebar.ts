import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "": [
    "/",
    "/home",
    "/slide",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "/guide/",
      link: "/guide/",
      children: "structure",
    },
  ],
  "/md/java": [
    {
      text: "Java 面向对象和基础",
      prefix: "basic/",
      collapsable: true,
      children: [
        "java-basic-oop",
        "java-basic-bok",
      ],
    }, {
      text: "Java进阶 - 集合框架",
      prefix: "collection/",
      collapsable: true,
      children: [
        "java-collection-overview",
      ],
    }, {
      text: "Java进阶 - 并发框架",
      prefix: "thread/",
      collapsable: true,
      children: [
        "java-thread-x-overview",
        "java-thread-x-theory-basic",
        "java-thread-x-thread-basic",
        "java-thread-x-juc-overview",
      ],
    }, {
      text: "Java进阶 - IO框架",
      prefix: "io/",
      collapsable: true,
      children: [
        "java-io-overview",
      ],
    }, {
      text: "Java进阶 - JVM相关",
      prefix: "jvm/",
      collapsable: true,
      children: [
        "java-jvm-classloader",
        "java-jvm-class-enhencer",
        "java-jvm-jmm-struct",
        "java-jvm-gc",
        "java-jvm-debug-tools-ref",
      ],
    }
  ],
  "/md/db": [
    {
      text: "数据库基础和原理",
      prefix: "sql/",
      collapsable: true,
      children: [
        "db-sql-theory",
        "db-sql-lan",
      ],
    }, {
      text: "SQL 数据库",
      prefix: "sql-mysql/",
      collapsable: true,
      children: [
        "db-sql-mysql-overview",
      ],
    }, {
      text: "NoSQL 数据库",
      prefix: "nosql/",
      collapsable: true,
      children: [
        "db-nosql-redis-overview",
        "db-nosql-mongodb-overview",
        "db-nosql-elasticsearch-overview",
      ],
    }
  ],
  "/md/spring": [
    {
      text: "Spring Framework 基础",
      prefix: "spring-framework/",
      collapsable: true,
      children: ["spring-framework-overview", "spring-framework-introduce", "spring-framework-ioc", "spring-framework-aop", "spring-framework-mvc"]
    }, {
      text: "SpringCloud",
      prefix: "spring-cloud/",
      collapsable: true,
      children: ["spring-cloud-overview", "spring-cloud-netflix-overview", "spring-cloud-alibaba-overview", "spring-cloud-tencent-overview"]
    }, {
      text: "SpringBoot 系列",
      prefix: "spring-boot/",
      collapsable: true,
      children: ["spring-boot-overview", "spring-boot-guide", "spring-boot-interface-resp", "spring-boot-mysql"]
    }
  ],
  "/md/framework": [
    {
      text: "ORM 框架",
      prefix: "orm/",
      collapsable: true,
      children: ["framework-orm-mybatis-overview"]
    }, {
      text: "MQ 消息队列",
      prefix: "mq/",
      collapsable: true,
      children: ["framework-mq-rocketmq-overview", "framework-mq-rabbitmq-overview", "framework-mq-kafka-overview"]
    }, {
      text: "RPC 中间件",
      prefix: "rpc/",
      collapsable: true,
      children: ["framework-rpc-dubbo-overview", "framework-rpc-grpc-overview"]
    }, {
      text: "Netty",
      prefix: "netty/",
      collapsable: true,
      children: ["framework-netty-overview"]
    }, {
      text: "分库分表框架",
      prefix: "ds-sharding/",
      collapsable: true,
      children: ["framework-ds-sharding-sphere-overview"]
    }
  ]
});
