import React from "react";

import Card from "./Card";

function Home() {
  return (
    <>
      <h1>This is the list of Products</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          margin: "3rem 1rem",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Card
          url="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg"
          name="Camera"
          minimum={2}
        />
        <Card
          url="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          name="Watch"
          minimum={4}
        />
        <Card
          url="https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg"
          name="Lighter"
          minimum={3}
        />
        <Card
          url="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDg8NDQ0NDQ8NDQ0NFREXIhURFRUYHTQgGBoxHhMTIzEiJTUrMTY6GCA1RDMuNyovLisBCgoKDg0OFw8QGS0dIB0rLSs3Ky0tLSsvNzUrNy0rNS43Ny0tLSstMDctLTI3LTA3KzYsKysrKzctKzUrNi0tNf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAQACAwEAAAAAAAAAAAAAAQIEBwMFBgj/xAA4EAACAgIAAwYEAwYGAwAAAAAAAQIRAwQFEiEGEzFBUWEHIjJxFIGRI0JDYqHwFTOCkrGzJXN0/8QAGgEBAQEAAwEAAAAAAAAAAAAAAAEDAgQFBv/EACURAQACAQMCBgMAAAAAAAAAAAABEQIDBPAhQRIiMXGBsSNhof/aAAwDAQACEQMRAD8A7hBQBCgoEBQAAAAEAFIUgAEAFBCAUyxZGwDZlhksAzLKQCGTTIBlko0xQGKFGqAGaBQBzigAALAAAACCyAASxYGiMlkbAoszYsDVkslksC2ZbFmbArIRslgUgslgACWAAAAAACGgBywAAAJYAEsWAI2GzNgWxZLJYGrJZLJYGrJZLIBqyWSxYFbMhsgAgIAsEACwQAUEAFBABohABzQAAICACBmWBbM2GzNgaslmbMtgbsWePmKmBuxZkNgWwZsWBqyWSyWBSCyWBSCyAUEAAEAFBABSkAHOIAAMsrMsCNmWysy2AbMtkbM8wGrOPv7uHWxSzZ8kMWKCuU5uor2937Hr+J9odfWm8VZs+eKTlh1sUs04WunO18uO/Lnas6n45xXZ4js5NPiH7GWSfecMcuSMcWR9I4J8snFqaX1W2peddDjlNNtDTjPLzTUd3P7TfEvYy5Yx4feDBjmpd5KN5M9Pwa/dh7eL/odjdle0GPiOrj2IVGT+XLju3iyrxj9vNezR+e8kXGTjJOMotxlGSpxkvFNep7vsZ2jlwzbU3b18tQ2I1b5L6TXur/5RjjnN9Xt7rYYTpfjjrH9foWyM42tnjOMZRkpRklKMou4yi10afmjz2dh88WSzLZLA3YsxYsDdksgAoIAKCACggAAgAtggA55GLI2AbMthsw2AbMthsy2Bmcj0HaLj8+HxlmnrSya0YXLLimpTxz69Z42vo+n5ottW+lKz3sji7WGM4uMkpJppppNNPxTQHxXw34rrbmr3Dm5bkHLPuqaqU82Wcm5p/vLrXtSXocvtx2Rhu6zWOKjnx/Nhl4W/OF+V1+TpnX0MU+D9o8ePD9DzQhGHg8mpnr5F68rbr/1o7w+pEmLcsMpxm4dAbspbmGWeaa3tVRx78GuWWXGnyw2q9bqM/R0/M9K4uk2moyvlbTSlT60/M7L+InBsmpsY+LakItxfJs42rx5YSVOORecJRfLL8n7nz+fDrZ9ZJZpLDOM8vD55pZJywuPLzaTV9JRfMqSd88ZK+ieGWL3dtuvLGPbnT4+nv/hb2pcWuHbE+jt6kpeXrhv9WvzXojtSLs6T4X2LePFDY4jtrh08rjHTx2ln/ENru5TX7qTptLr6uJ2Z2R41LaxTw50obupLudvF4VNeGRfyyq0zTC6qXn77HCc5z0/nnOr6ElAI0dBKBojQEKQWBRZABbBABSAAASxYFBLAHPZllbMtgRmWGzLYBmGVsywIzxyPIzEgOvvin2ce1rw2sEMktrWaS7pOU54W+qpdXTqSq34+p4Php26ybTlp8QyQWzHlWvKUe7lnSVShLy7xNX5N2+nRnYWSFnU/xP7HS55cS1IN3823jhfMpL+PFL7fNX39WB2xs4MefHLHOKlCcXGUZK04tdUzp3imhPge68MpyhpbOSObX2a5nqbMH+zze9fTNecZX5dPDwf4h8RWlk1/kzZoQlWzPLybENdxd5Kqsko9Hd37Pqz1G6s+wlDNxDNNYp1W1u5JKcq+vlna9eq9STFtdLU8Htzntb6ng3FeIbOxmw7mlh3c+tleTDs7LjiwaWSXrKqcHUZRUevS16rl8QctDalva+1La4jjjjz8QxOHd4trSnUUsMV48vLGqbfXxb6HXG7FQhj5ci6pxcsWW5VD5UpRcbSrwvy8DncB4+9RQh3UtieOLx4e95JRwQnK3GCrxbZPC1y3FzMxFfrnZ7rd+IfH5ZpTw4suLDzN48c9HvJcnM2lKXL16NLp6LztvtHsX2hXENOGSSnDYxxjDZx5Yd3OOSvqqlcX1aa+3Rpo60n2rldZNPUxy8eXJm18WSnFr6ZyUkvDx9EIdtZ62aGX8I8co23yrk58brmi+vWHTytLx8kcnVd2JkU0fn3ivHtje2vxOSfL8qxrDDLlx44pPp069ffp9j3nZHtXPhTyx3ZTnp5mpwnHvNjIs8ox+VSk1SUXG1X7y6gdzkZ6/g/FsG5hhsa+RZMU7qStNNeMZJ9U16M59gLLZixYGrFmbFgasWZsWBqyWSxYFsGSgc9mWGzLYBsywzLAMgslhQyytkCJRx8+OzlI8eRAdI9v1/h+9PDqRhrY9nXx5M0cUIxU8kpZU5dOqdLy6efj1Pkc+1Pzm2qSuk30/I+z+L6/8li/+TF/25T4jPQHK72L0pRcZ/iZbmKcMypxjrLHOModHa+aSfp09jW5kyYsThGXK8aXNNqpd5lSfcxa6r5UnJ+1eCSfBhObThCN1GUnXjypPy/M9nxbVXd489vlybmy8nzOrlJOL5bpdE6aSv3pAeLRx7UcMXD8NGNtqOTXwznkt+Dco3XsjWlnT58coNTc+8nrR/yc0K6ywr+HlVXf3vonE8PEuGZcmRZMT5oOMXzRkuVUqpengcrQ1+938UYSnFQU8mSaScoQhCTnLr08F59OpzmIq1qnC2sTx5WlNyi0pQkpSSlBpOMkr6WnF17nL0OJNZMWDYm3ozyQezjkk+8xJxbTb6/w4/ojgbOXm7i/qjhipfm24r/a4L8jfD9X8RtYMHNyd9NYuercea1fv4+BwR9L8L+I7WrxPW1u8UsG/j58mNPmin3UpQn7TXJT9vyrvSMjpP4V8Jm+K58mTr/h8Z4bvmis8rjUX6Usv6r1O6YAeSxZlsWBqxZmxYGrFmbFgasWZsWBqwZsAc9sy2GzLZAbMthsgUsEIBbBABbMzYszIDpj4zYpY93WzSVYsmusUZfz45zck/Tpkj/X0Pl8nB5SUZLZ02pRUku+lzU14P5fE/QmaFnDyaKk76foB+d82B4HzLY11NXXLNyfVdejjXgz2nCuIRWGWvnUc2LIoxeNTUHKq5ZY5PoppJJX4rpd2n3bLhUfRf7UZfDIU04RafRpxTTQHSkdfBDnUeI/h4Lr3ezrZ8edKulximm/scae3j145sWJzks0VDNmnB4subHdvHjjdwg+lyfp5+D+k+I2tg08mti1sU9aWTmmpY/2etKn9Diul3Xp4+/T4/b1HlyzlHG8OKeR1GL5lFt/Sm/FX0V+wtZiou3g75SlKUpRTk7dKVL2XovJL2PJr70cOfHkUnJwfNFxfVSp14+FN/0NY+GKcHUvnjb9pJePTyafRr7epzdvj08mhHQko1Cacs1JSliivlxv7Pz/AJUVH3vwZ2YSx7WL5+8U8eWbaXI04tKXN4uTcZXfojtKJ8B8J+DT1NKU8sJQy7ORzcZxcZxxxVQi0/tKX+o++QRWCMAWxZLFgWxZLJYGrFmbFgaBmwBzmyNmWyWRWrI2ZslgaIRslgUtmbFgUyy2RgYkjPKbZllQozKBbLYHzfbDgGLf1cmHJFW1eOddceRfTNf34WjpbXeSEsutsRccmOXdZE1051ddfdJ/2z9E5IpnouO9ntfbxTx5IXGbU3ytxlzrwkmvPpX9CK6P2VOMHNJJwv5rvni16L7s9TrW5R6J01NqStOn4P2Po+LcNzauzPQcXOWS44Hf+ZF3ytX59PtaaPY9hOxmTby5fxmLPgx4ORckoSxvNJ81rmfkkl4eq6i7jo0xxjHOPH6O1eyfEoburj2IdFLpKPi4TX1R/U96cPhmji1sUcWHHHHjj4Rikl9zltlZ5Vc16DZLIyWEasWZsWBQZsWBqxZmxYGrBiwBzGyWZbM2B5LJzGLJYG7FmLFkG7FmbFgaslkslgUjFksoMWQjA0RozZbA4ubh2Gc45JY4OcU1GbinKKdWk/LwX6HnxYox8FRuyWBoy2RyMtgWxZiyWBuxZixYG7JZixYG7FnjsWBuynjsAcxshGSwNNkshANWLMiwNWDNiyDVizNiwNWSyWSwq2RsWZsCtizNiwLZLI2ZbKjVmWyNkbArZLMtksDVizFiwN2SzFiwN2SzNksDdgwAPYNkISwLYszYA1ZLICK1ZLMgI1YszYsDQszZArVmbDZlsDVkshLAtmbDZGwg2ZbDZlsoNkslksDVkslksDVizIA1ZLIALYIAOfZAyAUWQgFsEBBQQjA1ZDIsDQslkCrZLBGAbICACNggEbMsrMsqFkBAAAAAWAAIAKQADnkAAAAAACAZAAAAKAAgjIwCiMgAEIygDLMsAIyAAAICgwgCAAAKACj/2Q=="
          name="HD Camera"
          minimum={2}
        />
        <Card
          url="https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          name="Alexa"
          minimum={5}
        />
        <Card
          url="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80"
          name="Headphone"
          minimum={2}
        />
        <Card
          url="https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          name="Coca Cola"
          minimum={4}
        />
      </div>
    </>
  );
}
export default Home;
