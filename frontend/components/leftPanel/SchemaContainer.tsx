import React from 'react';
import Data from './schemaChildren/Data';
import Query from './schemaChildren/Query';

type SchemaContainerProps = {
  queries: any;
  currentSchema: string;
  tableList: string[];
  databaseSize: string;
};

const SchemaContainer = ({
  currentSchema,
  tableList,
  databaseSize,
  queries,
}: SchemaContainerProps) => (
  <div id="main-right">
    <div id="test-panels">
      <div id="schema-left">
        <div>
          <Query
            currentSchema={currentSchema}
            tableList={tableList}
            dbSize={databaseSize}
          />
        </div>
        <div>
          <Data queries={queries} />
        </div>
      </div>
    </div>
  </div>
);

export default SchemaContainer;