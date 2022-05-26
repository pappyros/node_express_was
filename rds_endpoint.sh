aws lambda invoke --function-name Lohan_get_rds_endpoint --payload '{ "value" : "RDS" , "Name" : "Lohan_RDS" }' response.json
sleep 5
sed -i 's/"//g' response.json
export endpoint=`cat response.json`
sed -i "s/endpoint/$endpoint/g" dockerfile
