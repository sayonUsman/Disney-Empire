const Blog = () => {
  return (
    <div className="container mx-auto min-h-screen mt-10 mb-5">
      <p className="p-2">
        1. What is an access token and refresh token? How do they work and where
        should we store them on the client-side?
      </p>

      <div className="pt-2 p-7">
        <p>
          * An access token is a credential artifact that lets a client
          application access protected resources on a server on behalf of a
          user. On the other hands refresh token is a special token that is used
          to obtain new access tokens when the current one expires.
        </p>

        <p className="pt-2">
          * Access tokens and refresh tokens are issued by an authorization
          server that conforms to the OAuth 2.0 protoco. The client application
          requests them as part of the user’s initial authentication and
          authorization flow. The client application can then use the access
          token to make secure calls to an API server and use the refresh token
          to get new access tokens without having to ask the user to log in
          again.
        </p>

        <p className="pt-2">
          * There are different ways to store access tokens and refresh tokens
          on the client-side.
        </p>
        <p className="pt-2 pl-4">1. Local Storage</p>
        <p className="pt-1 pl-4">2. Session Storage</p>
        <p className="pt-1 pl-4">3. HttpOnly Cookies</p>
      </div>

      <p className="p-2">2. Compare SQL and NoSQL databases.</p>

      <div className="pt-2 p-7">
        <p className="pt-2">
          * SQL and NoSQL databases are two types of databases that differ in
          their structure, scalability, language, and use cases. Here are some
          of the main differences between them:
        </p>

        <p className="pt-2 pl-4">
          1. Structure: SQL databases are relational databases that store data
          in tables with rows and columns. SQL databases have a predefined
          schema that defines the structure and type of data in each table.
          NoSQL databases are non-relational databases that store data in
          various formats, such as documents, key-value pairs, graphs, or
          columns. NoSQL databases have a dynamic schema that allows storing
          different kinds of data without a fixed structure.
        </p>

        <p className="pt-1 pl-4">
          2. Scalability: SQL databases are vertically scalable, meaning that
          they can handle more load by adding more resources to a single server,
          such as CPU, RAM, or SSD. However, this may be limited by the capacity
          of the server or the cost of upgrading it. NoSQL databases are
          horizontally scalable, meaning that they can handle more load by
          adding more servers to a cluster, which can distribute the data and
          workload among them. This allows for more flexibility and lower cost
          of scaling.
        </p>

        <p className="pt-1 pl-4">
          3. Language: SQL databases use Structured Query Language (SQL) to
          query and manipulate data. SQL is a standardized and widely used
          language that supports complex operations and joins across tables.
          NoSQL databases use different query languages or APIs depending on the
          type and vendor of the database. Some NoSQL databases support a subset
          of SQL or a similar syntax, while others use their own proprietary
          languages or methods.
        </p>

        <p className="pt-1 pl-4">
          4. Use cases: SQL databases are suitable for structured data that has
          clear relationships and constraints among its entities. SQL databases
          are good for applications that require consistency, integrity, and
          accuracy of data, such as financial transactions, inventory
          management, or online booking systems. NoSQL databases are suitable
          for unstructured or semi-structured data that has varying formats and
          schemas. NoSQL databases are good for applications that require
          flexibility, scalability, and performance of data, such as social
          media, big data analytics, or real-time applications.
        </p>
      </div>

      <p className="p-2">3. What is express js and what is Nest JS?</p>

      <div className="pt-2 p-7">
        <p>
          * Express.js is a minimal and unopinionated framework that provides a
          thin layer of fundamental web application features, such as routing,
          middleware, error handling, and templating. Express.js does not
          enforce any specific architecture or structure, but rather gives
          developers the freedom to use any other libraries or tools they
          prefer. Express.js is suitable for simple and lightweight applications
          that do not require much configuration or boilerplate code.
        </p>

        <p className="pt-2">
          * Nest.js is a progressive and opinionated framework that provides a
          robust set of features for building scalable, reliable, and
          maintainable server-side applications. Nest.js is heavily inspired by
          Angular and uses a modular architecture that organizes the application
          into reusable components or modules. Nest.js also supports dependency
          injection, exception filters, pipes, guards, interceptors, and
          decorators, which enable implementing various design patterns and best
          practices. Nest.js is suitable for complex and enterprise-level
          applications that require a consistent and well-defined structure.
        </p>
      </div>

      <p className="p-2">4. What is MongoDB aggregate and how does it work?</p>

      <div className="pt-2 p-7">
        <p>
          * MongoDB aggregate is a command or a method that performs an
          aggregation operation using the aggregation pipeline. The aggregation
          pipeline is a framework that allows processing and transforming data
          from a collection or other source with a sequence of stage-based
          manipulations.
        </p>

        <p className="pt-2">
          * The aggregate command or method takes an array of pipeline stages as
          an argument. Each stage performs an operation on the input documents,
          such as filtering, grouping, sorting, projecting, or calculating
          values. The output documents of each stage are passed to the next
          stage as input, until the final result is produced.
        </p>
      </div>
    </div>
  );
};

export default Blog;
