<template>
    <div>
        <Row>
            <Card>
                <div class="ivu-table-box">
                    <Table :columns="columnsList" :data="data1"></Table>
                </div>
                <div class="margin-top-10">
                    <Page :total="100" show-sizer show-elevator />
                </div>
            </Card>
        </Row>
    </div>
</template>

<script>
 export default {
    name: 'full_order',
    data () {
        return {
            columnsList: [
                {
                    title: '编号',
                    key: 'number',
                    align: 'center'
                },
                {
                    title: '订单金额',
                    key: 'amount',
                    align: 'center',
                    sortable: true,
                    // filters: [
                    //     {
                    //         label: 'Greater than 25',
                    //         value: 1
                    //     },
                    //     {
                    //         label: 'Less than 25',
                    //         value: 2
                    //     }
                    // ],
                    // filterMultiple: false,
                    // filterMethod (value, row) {
                    //     if (value === 1) {
                    //         return row.amount > 25;
                    //     } else if (value === 2) {
                    //         return row.amount < 25;
                    //     }
                    // }
                },
                {
                    title: '会员',
                    key: 'member',
                    align: 'center'
                },
                {
                    title: '店铺',
                    key: 'store',
                    align: 'center'
                },
                {
                    title: '收货人',
                    key: 'consignee',
                    align: 'center'
                },
                {
                    title: '支付方式',
                    key: 'paymentMethodName',
                    align: 'center'
                },
                {
                    title: '配送方式',
                    key: 'shippingMethodName',
                    align: 'center'
                },
                {
                    title: '状态',
                    key: 'status',
                    align: 'center'
                },
                {
                    title: '创建日期',
                    key: 'createdDate',
                    align: 'center'
                },
                {
                    title: '操作',
                    key: 'operation',
                    align: 'center'
                }
            ],
            data1: [
                {   
                    number: '201808221010843',
                    amount: '24.00',
                    member: 'arg0',
                    store: '手机数码旗舰店',
                    consignee: '收货人名称',
                    paymentMethodName: '货到付款',
                    shippingMethodName: '顺丰快递',
                    status: '已付款',
                    createdDate: '1534925492712'
                },
                {   
                    number: '201808221010843',
                    amount: '25.00',
                    member: 'arg0',
                    store: '手机数码旗舰店',
                    consignee: '收货人名称',
                    paymentMethodName: '货到付款',
                    shippingMethodName: '顺丰快递',
                    status: '已付款',
                    createdDate: '1534925492712'
                },
                {   
                    number: '201808221010843',
                    amount: '26.00',
                    member: 'arg0',
                    store: '手机数码旗舰店',
                    consignee: '收货人名称',
                    paymentMethodName: '货到付款',
                    shippingMethodName: '顺丰快递',
                    status: '已付款',
                    createdDate: '1534925492712'
                }
            ]
        }
    },
    methods: {
    },
    components: {

    }
 }
</script>

<style>
.ivu-table td.demo-table-info-column{
    background-color: #2db7f5;
    color: #fff;
}
.ivu-table .demo-table-info-cell-name {
    background-color: #2db7f5;
    color: #fff;
}
.ivu-table .demo-table-info-cell-age {
    background-color: #ff6600;
    color: #fff;
}
.ivu-table .demo-table-info-cell-address {
    background-color: #187;
    color: #fff;
}
</style>
