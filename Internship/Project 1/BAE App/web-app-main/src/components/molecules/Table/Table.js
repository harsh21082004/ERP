import { noop } from 'lodash';
import { forwardRef } from 'react';

import * as Styles from './Table.styled';
// const columns = {
//   name: {
//     key: 'name',
//     label: 'Name',
//     content: (item) => (
//       <Flex>
//         <img alt={item.name} src={item.url} width={42} height={42} />
//         <p>{item.name}</p>
//       </Flex>
//     ),
//   },
//   email: {
//     key: 'email',
//     label: 'Email',
//     textContent: (item) => (item.social.email),
//   },
//   },
//   numberOfOrders: {
//     key: 'numberOfOrders',
//     label: 'Orders',
//     align: 'center',
//   },
//   joinDate: {
//     key: 'joinDate',
//     label: 'Join',
//     align: 'center',
//   },
//   action: {
//     key: 'action',
//     align: 'center',
//     content: (item) => <Button text="Act" as="a" href={`/data/${item.id}`} />,
//   },
// };

// const userData = [
//   {
//     id: 1,
//     name: 'Ameya Jain',
//     url: 'https://pbs.twimg.com/profile_images/866013516599316482/8nX2lb5J_400x400.jpg',
//     socialData: { email: 'me@ajain.com' }
//     numberOfOrders: 13,
//     joinDate: '3 days ago',
//   },
//   {
//     id: 2,
//     name: 'Ameya Jain',
//     url: 'https://pbs.twimg.com/profile_images/866013516599316482/8nX2lb5J_400x400.jpg',
//     socialData: { email: 'me@ajain.com' }
//     numberOfOrders: 13,
//     joinDate: '3 days ago',
//   },
//   {
//     id: 3,
//     name: 'Ameya Jain',
//     url: 'https://pbs.twimg.com/profile_images/866013516599316482/8nX2lb5J_400x400.jpg',
//     socialData: { email: 'me@ajain.com' }
//     numberOfOrders: 13,
//     joinDate: '3 days ago',
//   },
//   {
//     id: 4,
//     name: 'Ameya Jain',
//     url: 'https://pbs.twimg.com/profile_images/866013516599316482/8nX2lb5J_400x400.jpg',
//     socialData: { email: 'me@ajain.com' }
//     numberOfOrders: 13,
//     joinDate: '3 days ago',
//   },
// ];

// type Props = {
//   columns: {
//     [key: string]: {
//       key: string,
//       label?: string,
//       align?: "center" | "left" | "right",
//       width?: string - (15%),
//       content?: (item, idx) => JSX,
//       textContent?: (item, idx) => string,
//       css?: style object,
//       cssHeader?: style object,
//     }
//   },
//   data?: Array<Object>,
//   rowConfig?: {
//     uniqueKey?: string,
//     css?: style object,
//     onClick?: (item, idx) => {},
//     ...restRowProps
//   },
// };

const Table = forwardRef(
  (
    {
      columns = {},
      lastRow = {},
      data = [],
      lastRowConfig = {},
      rowConfig: {
        uniqueKey = 'id',
        css,
        onClick = noop,
        ...restRowProps
      } = {},
      emptyDataMessage = '',
      ...rest
    },
    ref
  ) => {
    return (
      <Styles.Root>
        <Styles.StyledTable {...rest} ref={ref}>
          <thead>
            <tr>
              {Object.entries(columns).map(([key, columnData]) => (
                <Styles.Th
                  key={key}
                  $align={columnData.align}
                  width={columnData.width}
                  style={{ ...columnData.cssHeader }}
                >
                  {columnData.label ? columnData.label : ''}
                </Styles.Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && emptyDataMessage ? (
              <Styles.Tr style={{ ...css }} {...restRowProps}>
                <Styles.Td
                  colspan={Object.entries(columns).length}
                  style={{
                    paddingTop: '20px',
                    paddingBottom: '20px',
                  }}
                >
                  <Styles.TextLabel textAlign="center">
                    {emptyDataMessage}
                  </Styles.TextLabel>
                </Styles.Td>
              </Styles.Tr>
            ) : null}
            {data.map((item, rowIdx) => (
              <Styles.Tr
                key={item[uniqueKey]}
                style={{ ...css }}
                onClick={() => onClick(item, rowIdx)}
                {...restRowProps}
              >
                {Object.entries(columns).map(([key, columnData]) => (
                  <Styles.Td
                    key={key}
                    $align={columnData.align}
                    width={columnData.width}
                    style={{ ...columnData.css }}
                  >
                    {columnData.textContent ? (
                      <Styles.TextLabel textAlign={columnData.align}>
                        {columnData.textContent(item, rowIdx)}
                      </Styles.TextLabel>
                    ) : columnData.content ? (
                      columnData.content(item, rowIdx)
                    ) : (
                      <Styles.TextLabel textAlign={columnData.align}>
                        {item[key]}
                      </Styles.TextLabel>
                    )}
                  </Styles.Td>
                ))}
              </Styles.Tr>
            ))}
            {lastRow.length ? (
              <Styles.Tr style={{ ...lastRowConfig.css }} {...restRowProps}>
                {lastRow.map((item) => (
                  <Styles.Td
                    key={item.key}
                    $align={item.align}
                    width={item.width}
                    style={{ ...item.css }}
                  >
                    {item.textContent ? (
                      <Styles.TextLabel textAlign={item.align}>
                        {item.textContent}
                      </Styles.TextLabel>
                    ) : item.content ? (
                      item.content
                    ) : (
                      <Styles.TextLabel textAlign={item.align}>
                        {item.key}
                      </Styles.TextLabel>
                    )}
                  </Styles.Td>
                ))}
              </Styles.Tr>
            ) : null}
          </tbody>
        </Styles.StyledTable>
      </Styles.Root>
    );
  }
);

Table.displayName = 'Table';

export default Table;
