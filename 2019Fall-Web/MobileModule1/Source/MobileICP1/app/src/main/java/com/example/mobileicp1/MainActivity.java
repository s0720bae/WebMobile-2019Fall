package com.example.mobileicp1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button loginButton = (Button) findViewById(R.id.loginButton);

        loginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                boolean validationFlag = false;
                EditText usernameCtrl = (EditText) findViewById(R.id.usernameText);
                EditText passwordCtrl = (EditText) findViewById(R.id.passwordText);
                String username = usernameCtrl.getText().toString();
                String password = passwordCtrl.getText().toString();

                if(!username.isEmpty() && !password.isEmpty())

                {
                    if (username.equals("Admin") && password.equals("Admin")) {
                        validationFlag = true;
                    }

                    if (!validationFlag) {
                        Toast.makeText(getApplicationContext(), "Wrong Credentials",
                                Toast.LENGTH_LONG).show();
                    } else {
                            Intent redirect = new Intent(MainActivity.this, HomeActivity.class);
                            startActivity(redirect);
                    }
                }
            }
        });


    }



}


