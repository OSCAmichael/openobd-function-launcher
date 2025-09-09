interface Customer {
	id: string;
	company_name: string;
}

interface Operator {
	id: string;
	given_name: string;
}

interface VehicleMake {
	id: number;
	name: string;
}

interface VehicleModel {
	id: number;
	make_id: number;
	name: string;
	make?: VehicleMake;
}

interface Ticket {
	id: string;
	customer_id: string;
	operator_id: string | null;
	ticket_number: number;
	created_at: string;
	connection_id: string | null;
	vehicle_model_id: number;
	vin: string;

	customer?: Customer;
	operator?: Operator;
	vehicleModel?: VehicleModel;
}
