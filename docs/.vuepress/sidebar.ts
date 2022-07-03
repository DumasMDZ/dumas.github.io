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
      children: [
        "java-basic-oop",
        "java-basic-bok",
      ],
    }, {
      text: "Java进阶 - 集合框架",
      prefix: "collection/",
      children: [
        "java-collection-overview",
      ],
    }, {
      text: "Java进阶 - 并发框架",
      prefix: "thread/",
      children: [
        "java-thread-x-overview",
        "java-thread-x-theory-basic",
        "java-thread-x-thread-basic",
        "java-thread-x-juc-overview",
      ],
    }, {
      text: "Java进阶 - IO框架",
      prefix: "io/",
      children: [
        "java-io-overview",
      ],
    }, {
      text: "Java进阶 - JVM相关",
      prefix: "jvm/",
      children: [
        "java-jvm-classloader",
        "java-jvm-class-enhencer",
        "java-jvm-jmm-struct",
        "java-jvm-gc",
        "java-jvm-debug-tools-ref",
      ],
    }
  ],
  "/md/db":[
    {
      text: "数据库基础和原理",
      prefix: "sql/",
      children: [
        "db-sql-theory",
        "db-sql-lan",
      ],
    },{
      text: "SQL 数据库",
      prefix: "sql-mysql/",
      children: [
        "db-sql-mysql-overview",
      ],
    },{
      text: "NoSQL 数据库",
      prefix: "nosql/",
      children: [
        "db-nosql-redis-overview",
        "db-nosql-mongodb-overview",
        "db-nosql-elasticsearch-overview",
      ],
    }
  ]
});
